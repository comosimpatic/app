import { useEffect } from "react";

const SITE_NAME = "Distribution Factory Caribbean";
const DEFAULT_TITLE = `${SITE_NAME} — Connecting Caribbean Markets`;
const DEFAULT_DESCRIPTION =
  "Distribution Factory Caribbean is a Pan-Caribbean trade, distribution and investment platform connecting suppliers, buyers, investors and logistics providers across 15 core markets.";

const setMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const Seo = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    setMeta("description", description || DEFAULT_DESCRIPTION);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta("description", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);

  return null;
};

export default Seo;
