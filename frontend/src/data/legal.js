// Template legal content for DFX Caribbean. Placeholder policies
// intended to be reviewed by qualified legal counsel before the business relies on
// them — jurisdictions, entity names and specific terms should be confirmed first.

const lastUpdated = "September 2026";

export const legalDocs = {
  "privacy-policy": {
    title: "Privacy Policy",
    lastUpdated,
    intro:
      "This Privacy Policy explains how DFX Caribbean (“DFX,” “we,” “us”) collects, uses and protects information submitted through this website, including inquiry forms, sourcing requests and investment information requests.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "When you submit a form on this site — a sourcing request, product listing, partnership inquiry, investment information request or general contact — we collect the information you provide, which may include your name, company, country, email address, phone number and details of your inquiry.",
          "We also automatically collect limited technical information, such as browser type, device information and pages visited, to help us operate and improve the site.",
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: [
          "We use submitted information to respond to your inquiry, route it to the appropriate DFX pathway or regional desk, and maintain records of our commercial relationships.",
          "We do not sell your personal information to third parties. We may share information with logistics, distribution or financial partners where necessary to fulfill a specific request you've made — for example, connecting a sourcing request with a relevant supplier in our network.",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "We retain inquiry and account information for as long as necessary to service the relevant business relationship, and as required by applicable law and recordkeeping obligations.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on your location, you may have rights to access, correct or request deletion of your personal information. To make such a request, contact us using the details on our Contact page.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about this Privacy Policy can be directed to info@dfxcaribbean.com.",
        ],
      },
    ],
  },

  "terms-conditions": {
    title: "Terms & Conditions",
    lastUpdated,
    intro:
      "These Terms & Conditions govern your use of the DFX Caribbean website and the submission of inquiries, sourcing requests and other information through it.",
    sections: [
      {
        heading: "Use of this website",
        paragraphs: [
          "This website is provided for informational purposes and to facilitate trade, distribution, logistics and investment inquiries across DFX's Caribbean network. You agree to use it only for lawful purposes and to provide accurate information in any form you submit.",
        ],
      },
      {
        heading: "No binding commercial agreement",
        paragraphs: [
          "Submitting a form on this site (including a product listing, sourcing request, partnership or investment inquiry) does not, by itself, create a binding commercial or contractual relationship between you and DFX. Commercial terms are established separately, in writing, once a specific opportunity is progressed.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The content, design and branding of this website belong to DFX Caribbean or its licensors and may not be reproduced without permission, other than for personal, non-commercial reference.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "Information on this website, including market, product and investment information, is provided in good faith but without warranty of completeness or accuracy. DFX is not liable for decisions made based solely on information published on this site.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws applicable to DFX's principal place of business, without regard to conflict-of-law principles. Specific engagements may be subject to additional terms agreed separately.",
        ],
      },
    ],
  },

  "cookie-policy": {
    title: "Cookie Policy",
    lastUpdated,
    intro:
      "This Cookie Policy explains how DFX Caribbean uses cookies and similar technologies on this website.",
    sections: [
      {
        heading: "What cookies we use",
        paragraphs: [
          "This site uses a limited set of essential cookies required for the website to function correctly, such as remembering form state during a session.",
          "We may use analytics cookies to understand how visitors use the site, in order to improve navigation, content and performance. These do not identify you personally.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "Most browsers let you control or disable cookies through their settings. Disabling essential cookies may affect the functionality of forms and other interactive features on this site.",
        ],
      },
    ],
  },

  "supplier-terms": {
    title: "Supplier Terms",
    lastUpdated,
    intro:
      "These Supplier Terms outline the general basis on which manufacturers and suppliers work with DFX Caribbean through the “Sell Through DFX” pathway. Specific onboarding agreements supersede these general terms.",
    sections: [
      {
        heading: "Onboarding",
        paragraphs: [
          "Suppliers submitting products for distribution through DFX agree to provide accurate product, pricing, certification and compliance information for the markets they intend to enter.",
        ],
      },
      {
        heading: "Pricing and commercial terms",
        paragraphs: [
          "Wholesale pricing, minimum order quantities and distribution terms are agreed on a per-supplier and per-market basis and documented separately from these general terms.",
        ],
      },
      {
        heading: "Product compliance",
        paragraphs: [
          "Suppliers are responsible for ensuring their products meet the regulatory, labeling and certification requirements of the Caribbean markets into which DFX distributes them, and for promptly disclosing any changes that affect compliance.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "Either party may end a supplier relationship in accordance with the notice terms set out in the specific supplier agreement governing that relationship.",
        ],
      },
    ],
  },

  "partner-terms": {
    title: "Partner Terms",
    lastUpdated,
    intro:
      "These Partner Terms outline the general basis on which logistics companies, distributors, financial institutions and other organizations work with DFX Caribbean through the “Partner With DFX” pathway. Specific partnership agreements supersede these general terms.",
    sections: [
      {
        heading: "Partnership scope",
        paragraphs: [
          "Partnership arrangements with DFX vary by partner type and may cover logistics services, distribution coverage, referral arrangements, or joint commercial initiatives across one or more Caribbean markets.",
        ],
      },
      {
        heading: "Representations",
        paragraphs: [
          "Partners agree to represent DFX and its network accurately in their own commercial dealings, and to promptly disclose any conflicts of interest relevant to a shared opportunity.",
        ],
      },
      {
        heading: "Confidentiality",
        paragraphs: [
          "Commercial, pricing and opportunity information shared between DFX and a partner in the course of a partnership is treated as confidential and used only for the purposes of that partnership, unless otherwise agreed in writing.",
        ],
      },
      {
        heading: "Term and termination",
        paragraphs: [
          "Partnership terms, renewal and termination provisions are set out in the specific partnership agreement governing each relationship.",
        ],
      },
    ],
  },
};

export const findLegalDoc = (slug) => legalDocs[slug];
