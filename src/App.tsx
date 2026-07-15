import { useEffect, useState } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./components/home/Footer";
import Partners from "./pages/Partners";
import Career from "./pages/Career";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About Us" },
  { to: "/contacts", label: "Contacts" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link transition ${isActive ? "text-brand active" : "hover:text-brand/85"}`;

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 400);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <ScrollToTop />
      {/* Navigation */}
      <nav className="bg-white/80 fixed w-full top-0 left-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-brand"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/logo.png"
              className="w-38.5 h-13.5"
              alt="GHI Assets"
            />
          </Link>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand transition hover:bg-brand/10 md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-1/2 flex-col bg-white px-6 py-5 shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-brand"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/logo.png"
              className="w-38.5 h-13.5"
              alt="GHI Assets"
            />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand transition hover:bg-brand/10"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </aside>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
      <Footer />
      {showTopButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Go to top"
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition duration-300 hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/50 animate-bounce-top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
