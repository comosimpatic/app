import React, { useState } from "react";
import { Plus, Minus, MessageSquareText, X, Menu } from "lucide-react";
import { navItems } from "../mock";

const Logo = () => (
  <a href="#top" className="flex flex-col leading-none select-none">
    <div className="flex items-center gap-2">
      <span className="relative inline-block w-6 h-6">
        <span className="absolute inset-0 rounded-full bg-[#0e1b2a]" />
        <span className="absolute right-0 top-0 w-3 h-3 rounded-full bg-[#c9ccd1] border-2 border-white" />
      </span>
      <span className="font-bold text-[19px] tracking-tight text-[#0e1b2a]">fuselab</span>
    </div>
    <span className="text-[13px] text-[#0e1b2a] pl-8 -mt-1 tracking-wide">creative</span>
  </a>
);

const NavList = ({ onNavigate }) => {
  const [open, setOpen] = useState(null);
  return (
    <nav className="flex flex-col gap-[2px] mt-8">
      {navItems.map((item, idx) => {
        const hasChildren = !!item.children;
        const isOpen = open === idx;
        return (
          <div key={item.label} className="flex flex-col">
            <div className="flex items-center gap-2 py-[7px] group">
              {hasChildren ? (
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="text-[#1fdd7a] hover:scale-110 transition-transform"
                  aria-label="expand"
                >
                  {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                </button>
              ) : (
                <span className="w-[15px]" />
              )}
              <a
                href={item.href}
                onClick={onNavigate}
                className="fuse-link-underline text-[15.5px] text-[#0e1b2a] hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            </div>
            {hasChildren && (
              <div
                className="overflow-hidden transition-all duration-300 ease-out pl-[26px]"
                style={{ maxHeight: isOpen ? `${item.children.length * 40}px` : "0px" }}
              >
                {item.children.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    onClick={onNavigate}
                    className="block py-[6px] text-[14px] text-[#6b7683] hover:text-[#0e1b2a] transition-colors"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

const BookCard = () => (
  <a
    href="#contact"
    className="block relative rounded-[10px] bg-[#1fdd7a] hover:bg-[#10c968] transition-colors p-4 pr-12 mt-6 group"
  >
    <p className="text-[14px] leading-tight text-[#05261a]">
      Book
      <br />
      <span className="font-medium">a discovery call</span>
    </p>
    <MessageSquareText
      size={20}
      className="mt-4 text-[#05261a] group-hover:translate-x-1 transition-transform"
    />
  </a>
);

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-16 bg-white/90 backdrop-blur border-b border-black/5">
        <Logo />
        <button onClick={() => setMobileOpen(true)} aria-label="menu">
          <Menu size={26} className="text-[#0e1b2a]" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-screen w-[220px] px-6 py-8 bg-white z-40 border-r border-black/[0.04]">
        <div>
          <Logo />
          <NavList />
        </div>
        <BookCard />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] fuse-reveal">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[280px] bg-white p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between">
                <Logo />
                <button onClick={() => setMobileOpen(false)} aria-label="close">
                  <X size={24} className="text-[#0e1b2a]" />
                </button>
              </div>
              <NavList onNavigate={() => setMobileOpen(false)} />
            </div>
            <BookCard />
          </div>
        </div>
      )}
    </>
  );
}
