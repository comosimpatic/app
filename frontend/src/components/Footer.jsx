import React from "react";
import { Link } from "react-router-dom";
import PalmScene from "./PalmBand";

const link = "hover:text-teal-light transition-colors";

const Footer = () => (
  <footer className="relative overflow-hidden text-white font-bold pt-36 sm:pt-48 pb-8" id="footer">
    <PalmScene />
    <div className="relative max-w-wrap mx-auto px-5 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
        <div>
          <span className="inline-block bg-white rounded px-3 py-2 mb-4">
            <img
              src="/logo.png"
              alt="Distribution Factory Caribbean"
              className="h-14 w-auto block"
            />
          </span>
          <p className="text-[15px] font-bold max-w-[32ch]">
            Connecting the Caribbean to do more business. Home of the DFX Caribbean platform.
          </p>
        </div>
        <div>
          <h4 className="text-white text-[15px] font-bold mb-4">Company</h4>
          <ul className="space-y-2.5 text-[15px] font-bold">
            <li><Link to="/about" className={link}>About</Link></li>
            <li><Link to="/services" className={link}>Services</Link></li>
            <li><Link to="/investment" className={link}>Investment</Link></li>
            <li><Link to="/network" className={link}>Markets</Link></li>
            <li><Link to="/news" className={link}>DFX Caribbean Pulse</Link></li>
            <li><Link to="/blog" className={link}>Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[15px] font-bold mb-4">DFX Caribbean</h4>
          <ul className="space-y-2.5 text-[15px] font-bold">
            <li><Link to="/dfx-caribbean" className={link}>Overview</Link></li>
            <li><Link to="/business-model" className={link}>Business Model</Link></li>
            <li><Link to="/clients" className={link}>Clients</Link></li>
            <li><Link to="/products" className={link}>Products</Link></li>
            <li><Link to="/trade" className={link}>Trade</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[15px] font-bold mb-4">Contact</h4>
          <ul className="space-y-2.5 text-[15px] font-bold">
            <li>info@dfxcaribbean.com</li>
            <li><Link to="/business-model#doing-business" className={link}>Become a Partner</Link></li>
            <li><Link to="/investment" className={link}>Request Investment Information</Link></li>
            <li><Link to="/contact" className={link}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/30 pt-6 flex flex-wrap justify-between gap-x-6 gap-y-3 text-[13.5px] font-bold">
        <span>&copy; {new Date().getFullYear()} Distribution Factory Caribbean. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/legal/privacy-policy" className={link}>Privacy Policy</Link>
          <Link to="/legal/terms-conditions" className={link}>Terms &amp; Conditions</Link>
          <Link to="/legal/cookie-policy" className={link}>Cookie Policy</Link>
          <Link to="/legal/supplier-terms" className={link}>Supplier Terms</Link>
          <Link to="/legal/partner-terms" className={link}>Partner Terms</Link>
          <Link to="/legal/photo-credits" className={link}>Photo Credits</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
