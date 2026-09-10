import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-white text-ink-soft pt-16 pb-8 border-t border-parchment-line" id="footer">
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
          <h4 className="text-ink text-[14px] font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-[14px]">
            <li><Link to="/about" className="hover:text-teal">About DFC</Link></li>
            <li><Link to="/business-model" className="hover:text-teal">Business Model</Link></li>
            <li><Link to="/clients" className="hover:text-teal">Clients</Link></li>
            <li><Link to="/news" className="hover:text-teal">News &amp; Insights</Link></li>
            <li><Link to="/blog" className="hover:text-teal">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-ink text-[14px] font-semibold mb-4">Do Business</h4>
          <ul className="space-y-2 text-[14px]">
            <li><Link to="/doing-business" className="hover:text-teal">Sell Through DFC</Link></li>
            <li><Link to="/doing-business" className="hover:text-teal">Buy Through DFC</Link></li>
            <li><Link to="/doing-business" className="hover:text-teal">Partner With DFC</Link></li>
            <li><Link to="/trade-investment" className="hover:text-teal">Trade &amp; Investment</Link></li>
            <li><Link to="/products" className="hover:text-teal">Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-ink text-[14px] font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-[14px]">
            <li>info@dfccaribbean.com</li>
            <li><Link to="/network" className="hover:text-teal">Regional network</Link></li>
            <li><Link to="/trade-investment" className="hover:text-teal">Request Investment Information</Link></li>
            <li><Link to="/contact" className="hover:text-teal">Contact DFC</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-parchment-line pt-6 flex flex-wrap justify-between gap-x-6 gap-y-3 text-[12.5px]">
        <span>&copy; {new Date().getFullYear()} Distribution Factory Caribbean. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/legal/privacy-policy" className="hover:text-teal">Privacy Policy</Link>
          <Link to="/legal/terms-conditions" className="hover:text-teal">Terms &amp; Conditions</Link>
          <Link to="/legal/cookie-policy" className="hover:text-teal">Cookie Policy</Link>
          <Link to="/legal/supplier-terms" className="hover:text-teal">Supplier Terms</Link>
          <Link to="/legal/partner-terms" className="hover:text-teal">Partner Terms</Link>
          <Link to="/legal/photo-credits" className="hover:text-teal">Photo Credits</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
