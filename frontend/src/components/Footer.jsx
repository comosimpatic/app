import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-navy-deep text-cream/65 pt-16 pb-8" id="footer">
    <div className="max-w-wrap mx-auto px-5 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
        <div>
          <img
            src="/logo.png"
            alt="Distribution Factory Caribbean"
            className="h-10 w-auto mb-3"
          />
          <p className="text-[14px] max-w-[32ch]">
            A pan-Caribbean trade, distribution and investment platform.
          </p>
        </div>
        <div>
          <h4 className="text-cream/90 text-[14px] font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-[14px]">
            <li><Link to="/about" className="hover:text-cream">About DFC</Link></li>
            <li><Link to="/business-model" className="hover:text-cream">Business Model</Link></li>
            <li><Link to="/clients" className="hover:text-cream">Clients</Link></li>
            <li><Link to="/news" className="hover:text-cream">News &amp; Insights</Link></li>
            <li><Link to="/blog" className="hover:text-cream">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream/90 text-[14px] font-semibold mb-4">Do Business</h4>
          <ul className="space-y-2 text-[14px]">
            <li><Link to="/doing-business" className="hover:text-cream">Sell Through DFC</Link></li>
            <li><Link to="/doing-business" className="hover:text-cream">Buy Through DFC</Link></li>
            <li><Link to="/doing-business" className="hover:text-cream">Partner With DFC</Link></li>
            <li><Link to="/trade-investment" className="hover:text-cream">Trade &amp; Investment</Link></li>
            <li><Link to="/products" className="hover:text-cream">Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream/90 text-[14px] font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-[14px]">
            <li>info@dfccaribbean.com</li>
            <li><Link to="/network" className="hover:text-cream">Regional network</Link></li>
            <li><Link to="/trade-investment" className="hover:text-cream">Request Investment Information</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact DFC</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-x-6 gap-y-3 text-[12.5px]">
        <span>&copy; {new Date().getFullYear()} Distribution Factory Caribbean. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/legal/privacy-policy" className="hover:text-cream">Privacy Policy</Link>
          <Link to="/legal/terms-conditions" className="hover:text-cream">Terms &amp; Conditions</Link>
          <Link to="/legal/cookie-policy" className="hover:text-cream">Cookie Policy</Link>
          <Link to="/legal/supplier-terms" className="hover:text-cream">Supplier Terms</Link>
          <Link to="/legal/partner-terms" className="hover:text-cream">Partner Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
