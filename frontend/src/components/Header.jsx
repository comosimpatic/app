import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", to: "/about" },
  { label: "Business Model", to: "/business-model" },
  { label: "Clients", to: "/clients" },
  { label: "Products", to: "/products" },
  { label: "Trade & Invest", to: "/trade-investment" },
  { label: "Network", to: "/network" },
  { label: "Pulse", to: "/news" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-parchment-line">
      <nav className="flex items-center justify-between gap-6 px-5 sm:px-8 py-4 max-w-[1340px] mx-auto">
        <Link
          to="/"
          className="flex items-center shrink-0"
          data-testid="nav-logo"
        >
          <img
            src="/logo.png"
            alt="DFX Caribbean"
            className="h-9 sm:h-10 w-auto"
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-5">

          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                data-testid={`nav-link-${item.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `text-[13.5px] font-medium transition-colors ${
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link
            to="/business-model"
            className="hidden 2xl:inline-flex btn btn-outline-dark"
            data-testid="nav-cta-partner"
          >
            Become a Partner
          </Link>
          <Link to="/business-model" className="btn btn-coral" data-testid="nav-cta">
            Do Business With DFX
          </Link>
        </div>

        <button
          className="xl:hidden text-ink"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="xl:hidden border-t border-parchment-line bg-white px-5 sm:px-8 py-6">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink text-[15px] font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/business-model" className="btn btn-coral w-full mt-6 justify-center">
            Do Business With DFX
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
