import React from "react";
import { useNavigate } from "react-router-dom";

// Goes to the actual previous page when there's SPA history to go back to
// (so a country page reached from Trade & Investment returns there, not
// always to /network). Falls back to a fixed destination for a direct
// link visit or a freshly opened tab, where there's nothing to go back to.
const BackLink = ({ to, label, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      &larr; {label}
    </a>
  );
};

export default BackLink;
