import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  {
    label: "DFX Caribbean",
    to: "/dfx-caribbean",
    children: [
      { label: "Overview", to: "/dfx-caribbean" },
      { label: "Business Model", to: "/business-model" },
      { label: "Clients", to: "/clients" },
      { label: "Products", to: "/products" },
      { label: "Trade & Investment", to: "/trade-investment" },
    ],
  },
  { label: "Markets", to: "/network" },
  { label: "Pulse", to: "/news" },
  { label: "Contact", to: "/contact" },
];

const slug = (label) => label.toLowerCase().replace(/[^a-z]+/g, "-");
const isUnder = (pathname, to) => pathname === to || pathname.startsWith(to + "/");

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = (active) =>
    `text-[13.5px] font-medium transition-colors ${active ? "text-ink" : "text-ink-soft hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-parchment-line">
      <nav className="flex items-center justify-between gap-6 px-5 sm:px-8 py-4 max-w-[1340px] mx-auto">
        <Link to="/" className="flex items-center shrink-0" data-testid="nav-logo">
          <img
            src="/logo.png"
            alt="Distribution Factory Caribbean"
            className="h-11 sm:h-14 w-auto"
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-6">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.to} className="relative group">
                <Link
                  to={item.to}
                  data-testid={`nav-link-${slug(item.label)}`}
                  className={`inline-flex items-center gap-1 ${linkClass(
                    item.children.some((c) => isUnder(location.pathname, c.to))
                  )}`}
                >
                  {item.label}
                  <ChevronDown size={14} className="mt-px" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block group-focus-within:block">
                  <ul className="bg-white border border-parchment-line shadow-lg min-w-[220px] py-2">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={c.to}
                          end
                          data-testid={`nav-sub-${slug(c.label)}`}
                          className={({ isActive }) =>
                            `block px-5 py-2.5 text-[13.5px] font-medium transition-colors hover:bg-parchment ${
                              isActive ? "text-teal" : "text-ink-soft hover:text-ink"
                            }`
                          }
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  data-testid={`nav-link-${slug(item.label)}`}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="hidden xl:flex items-center shrink-0">
          <Link to="/contact" className="btn btn-coral" data-testid="nav-cta">
            Start a Business Conversation
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
        <div className="xl:hidden border-t border-parchment-line bg-white px-5 sm:px-8 py-6 max-h-[calc(100vh-72px)] overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink text-[15px] font-medium">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-3 ml-1 pl-4 border-l border-parchment-line flex flex-col gap-3">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} className="text-ink-soft text-[14.5px]">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-coral w-full mt-6 justify-center">
            Start a Business Conversation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
