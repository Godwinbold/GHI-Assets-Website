import { Routes, Route, Link, NavLink } from "react-router-dom";
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

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white/80 fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-brand">
            <img src="/images/logo.png" className="w-38.5 h-13.5" />
          </Link>
          <div className="flex gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link transition ${isActive ? "text-brand active" : "hover:text-brand/85"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link transition ${isActive ? "text-brand active" : "hover:text-brand/85"}`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `nav-link transition ${isActive ? "text-brand active" : "hover:text-brand/85"}`
              }
            >
              Insights
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link transition ${isActive ? "text-brand active" : "hover:text-brand/85"}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `nav-link transition ${isActive ? "text-brand active" : "hover:text-brand/85"}`
              }
            >
              Contacts
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Partners />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
