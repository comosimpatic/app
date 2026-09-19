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
      { label: "Trade", to: "/trade" },
    ],
  },
  { label: "Investment", to: "/investment" },
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
    `text-[16px] font-bold transition-colors ${active ? "text-teal" : "text-ink hover:text-teal"}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-parchment-line">
      <nav className="flex items-center justify-between gap-6 px-5 sm:px-8 py-3 max-w-[1340px] mx-auto">
        <Link to="/" className="flex items-center shrink-0" data-testid="nav-logo">
          <img
            src="/logo.png"
            alt="Distribution Factory Caribbean"
            className="h-[52px] sm:h-[68px] xl:h-[78px] w-auto"
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-5 2xl:gap-8">
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
                  <ChevronDown size={16} strokeWidth={2.5} className="mt-px" />
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
                            `block px-5 py-3 text-[15px] font-bold transition-colors hover:bg-parchment ${
                              isActive ? "text-teal" : "text-ink hover:text-teal"
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
          <Link to="/contact" className="btn btn-coral !font-bold !text-[15px]" data-testid="nav-cta">
            <span className="2xl:hidden">Start a Conversation</span>
            <span className="hidden 2xl:inline">Start a Business Conversation</span>
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
                <Link to={item.to} className="text-ink text-[18px] font-bold">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-3 ml-1 pl-4 border-l border-parchment-line flex flex-col gap-3">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} className="text-ink text-[16px] font-semibold">
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
