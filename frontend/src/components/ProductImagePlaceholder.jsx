import React from "react";
import { Image as ImageIcon } from "lucide-react";

const ProductImagePlaceholder = ({ label = "Product image coming soon", className = "" }) => (
  <div
    className={`aspect-square bg-white border border-parchment-line flex flex-col items-center justify-center gap-3 ${className}`}
  >
    <ImageIcon size={32} strokeWidth={1.25} className="text-ink-soft/50" aria-hidden="true" />
    <span className="font-serif text-[13px] text-ink-soft text-center px-6">{label}</span>
  </div>
);

export default ProductImagePlaceholder;
