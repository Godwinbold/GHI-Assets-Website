import { Fragment } from "react"
import { Link } from "react-router-dom"


interface BreadcrumbItem {
  label: string
  href?: string  // omit for the current (last) page
}

interface BreadcrumbProps {
  className?: string
}

const Breadcrumb = ({ className = "" }: BreadcrumbProps) => {
const  pathName = window.location.pathname;
    const pathSegments = pathName.split("/").filter(Boolean) // split and remove empty segments
    const items: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
      ...pathSegments.map((segment, index) => {
        return {
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          href: `/${pathSegments.slice(0, index + 1).join("/")}`,
        }
      })
    ]
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <Fragment key={item.label}>
              <li>
                {isLast || !item.href ? (
                  <span
                    aria-current="page"
                    className="text-[13px] capitalize font-medium text-white"
                  >
                      {item.label.split("-").join(" ").substring(0, 20)}{item.label.length > 20 ? "..." : ""}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-[13px] text-white/60 transition-colors hover:text-white"
                  >
                    {item.label.split("-").join(" ")}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    strokeLinejoin="round" className="text-white/35">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb