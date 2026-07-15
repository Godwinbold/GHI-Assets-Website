
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom"
import { RiTwitterXLine } from "react-icons/ri";
const footerLinks = {
  solutions: [
    { label: "Ground Handling Representation", href: "/solutions/ground-handling" },
    { label: "Sales & Distribution Services", href: "/solutions/sales" },
    { label: "Route Development Support", href: "/solutions/route-development" },
    { label: "Cargo Services", href: "/solutions/cargo" },
    { label: "Aviation Training", href: "/solutions/training" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Our Partner Airlines", href: "/partners" },
    { label: "Insights", href: "/insights" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-brand">
      {/* Dot grid + radial highlight overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("/images/pattern.png")
          `,
          backgroundSize: "auto, 22px 22px",
        }}
      />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-brand/70" />

      {/* Main grid */}
      <div className="relative grid grid-cols-1 gap-10 px-12 pt-14 pb-12 md:grid-cols-[1.6fr_1.4fr_1fr_1.2fr]">

        {/* Brand col */}
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border bg-[#FAFCFF] border-white/20">
            <img src="/images/logo.png" alt="GHI Assets" className="h-10 w-12 object-contain" />
          </div>
          <p className="mb-6 max-w-55 text-[13px] leading-relaxed text-white/90">
            Africa's premier aviation consultancy, delivering precision strategy and
            measurable results for airlines and aviation partners worldwide
          </p>
          <div className="flex gap-2">
            {[
            { href: "https://x.com/ghi_assets", label: "X", Icon: RiTwitterXLine },
              { href: "https://www.instagram.com/ghi_assets/", label: "Instagram", Icon: SlSocialInstagram },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                to={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-[#E8E7E799]  transition-colors hover:bg-highlight hover:border-highlight text-white/90 hover:text-white"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* Solutions col */}
        <div>
          <p className="mb-4.5 text-[12px] font-semibold uppercase tracking-widest text-white">
            Solution for Airlines
          </p>
          {footerLinks.solutions.map(({ label, href }) => (
            <Link key={label} to={href} className="mb-3 block text-[14px] text-white/75 transition-colors hover:text-highlight">
              {label}
            </Link>
          ))}
        </div>

        {/* Company col */}
        <div>
            <p className="mb-4.5 text-[12px] font-semibold uppercase tracking-widest text-white">
            Company
          </p>
          {footerLinks.company.map(({ label, href }) => (
            <a key={label} href={href} className="mb-3 block text-[14px] text-white/75 transition-colors hover:text-highlight">
              {label}
            </a>
          ))}
        </div>

        {/* Contact col */}
        <div>
         <p className="mb-4.5 text-[12px] font-semibold uppercase tracking-widest text-white">
            Get in Touch
          </p>
          {[
            { icon: "ti-mail", text: "info@ghiassets.com" },
            { icon: "ti-phone", text: "+234 803 491 1715" },
            { icon: "ti-map-pin", text: "Ikeja GRA, Lagos" },
          ].map(({ icon, text }) => (
            <div key={text} className="mb-3.5 flex items-center gap-2.5 text-[14px] text-white/75">
              <i className={`ti ${icon} text-base text-white/40`} aria-hidden />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t mt-10 border-white/10">
        <div className="flex items-center justify-between px-12 py-5">
          <span className="text-[12px] text-white/35">
            © 2025 GHI Assets Limited. All rights reserved.
          </span>
          <nav className="flex gap-7" aria-label="Legal">
            {footerLinks.legal.map(({ label, href }) => (
              <Link key={label} to={href} className="text-[12px] text-white/35 transition-colors hover:text-white/75">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer