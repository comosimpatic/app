import { useEffect } from "react";

const SITE_NAME = "Distribution Factory Caribbean";
const DEFAULT_TITLE = `${SITE_NAME} — Connecting the Caribbean to do more business`;
const DEFAULT_DESCRIPTION =
  "Distribution Factory Caribbean connects manufacturers, suppliers, businesses, logistics providers and investors with opportunities across Caribbean markets — trade, distribution, logistics, market access and investment.";

const setMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const Seo = ({ title, description, noIndex = false }) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    setMeta("description", description || DEFAULT_DESCRIPTION);

    let robotsTag;
    if (noIndex) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      robotsTag.setAttribute("content", "noindex, nofollow");
      document.head.appendChild(robotsTag);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta("description", DEFAULT_DESCRIPTION);
      if (robotsTag) robotsTag.remove();
    };
  }, [title, description, noIndex]);

  return null;
};

export default Seo;
