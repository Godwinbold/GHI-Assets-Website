import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  image?: string;
  type?: "website" | "article";
  schema?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  keywords = "aviation consulting, ground handling, route development, airport supervision, cargo services, aviation training, Nigeria aviation, GHI Assets",
  canonicalPath,
  image = "/images/logo.png",
  type = "website",
  schema,
}: SEOProps) {
  const { pathname } = useLocation();
  const siteUrl = "https://ghiassets.com";
  
  // Format the title to include company branding
  const fullTitle = title.includes("GHI Assets") ? title : `${title} | GHI Assets`;
  
  // Determine canonical URL
  const path = canonicalPath || pathname;
  const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
  
  // Resolve image URL
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // 5. Update Open Graph Tags
    const ogTags: Record<string, string> = {
      "og:type": type,
      "og:title": fullTitle,
      "og:description": description,
      "og:image": imageUrl,
      "og:url": canonicalUrl,
      "og:site_name": "GHI Assets Limited",
    };

    Object.entries(ogTags).forEach(([property, value]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    });

    // 6. Update Twitter Tags
    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": imageUrl,
    };

    Object.entries(twitterTags).forEach(([name, value]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    });

    // 7. Update Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 8. Update JSON-LD Schema Script
    const existingSchemaScript = document.getElementById("json-ld-schema");
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }
    if (schema) {
      const script = document.createElement("script");
      script.id = "json-ld-schema";
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup script on unmount
    return () => {
      const scriptToClean = document.getElementById("json-ld-schema");
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [fullTitle, description, keywords, canonicalUrl, imageUrl, type, JSON.stringify(schema)]);

  return null;
}
