import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", to: "/about" },
  { label: "Business Model", to: "/business-model" },
  { label: "Clients", to: "/clients" },
  { label: "Doing Business", to: "/doing-business" },
  { label: "Products", to: "/products" },
  { label: "Trade & Invest", to: "/trade-investment" },
  { label: "Network", to: "/network" },
  { label: "Insights", to: "/news" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <nav className="flex items-center justify-between gap-6 px-5 sm:px-8 py-4 max-w-[1340px] mx-auto">
        <Link
          to="/"
          className="flex items-baseline gap-2 font-serif text-[18px] text-cream shrink-0"
          data-testid="nav-logo"
        >
          <span className="text-teal-light text-[19px]">&#9670;</span>
          <span className="hidden sm:inline">Distribution Factory Caribbean</span>
          <span className="sm:hidden">DFC</span>
        </Link>

        <ul className="hidden xl:flex items-center gap-5">

          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                data-testid={`nav-link-${item.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `text-[13.5px] font-medium transition-colors ${
                    isActive ? "text-cream" : "text-cream/75 hover:text-cream"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link to="/doing-business" className="btn btn-coral" data-testid="nav-cta">
            Do Business With DFC
          </Link>
        </div>

        <button
          className="xl:hidden text-cream"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="xl:hidden border-t border-white/10 bg-navy-deep px-5 sm:px-8 py-6">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/85 text-[15px] font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-cream/85 text-[15px] font-medium">
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/doing-business" className="btn btn-coral w-full mt-6 justify-center">
            Do Business With DFC
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
