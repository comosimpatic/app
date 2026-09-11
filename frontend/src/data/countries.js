// Core launch markets and phase-2 expansion markets for the DFX network.

export const coreMarkets = [
  { slug: "antigua-and-barbuda", name: "Antigua & Barbuda", capital: "St. John's", currency: "East Caribbean Dollar (XCD)", language: "English", subregion: "Eastern Caribbean" },
  { slug: "bahamas", name: "Bahamas", capital: "Nassau", currency: "Bahamian Dollar (BSD)", language: "English", subregion: "Northern Caribbean" },
  { slug: "barbados", name: "Barbados", capital: "Bridgetown", currency: "Barbadian Dollar (BBD)", language: "English", subregion: "Eastern Caribbean" },
  { slug: "belize", name: "Belize", capital: "Belmopan", currency: "Belize Dollar (BZD)", language: "English", subregion: "Central America / Caribbean Basin" },
  { slug: "dominica", name: "Dominica", capital: "Roseau", currency: "East Caribbean Dollar (XCD)", language: "English", subregion: "Eastern Caribbean" },
  { slug: "dominican-republic", name: "Dominican Republic", capital: "Santo Domingo", currency: "Dominican Peso (DOP)", language: "Spanish", subregion: "Greater Antilles" },
  { slug: "grenada", name: "Grenada", capital: "St. George's", currency: "East Caribbean Dollar (XCD)", language: "English", subregion: "Eastern Caribbean" },
  { slug: "guyana", name: "Guyana", capital: "Georgetown", currency: "Guyanese Dollar (GYD)", language: "English", subregion: "Mainland Caribbean / South America" },
  { slug: "haiti", name: "Haiti", capital: "Port-au-Prince", currency: "Haitian Gourde (HTG)", language: "French / Haitian Creole", subregion: "Greater Antilles" },
  { slug: "jamaica", name: "Jamaica", capital: "Kingston", currency: "Jamaican Dollar (JMD)", language: "English", subregion: "Greater Antilles" },
  { slug: "st-kitts-and-nevis", name: "St. Kitts & Nevis", capital: "Basseterre", currency: "East Caribbean Dollar (XCD)", language: "English", subregion: "Eastern Caribbean" },
  { slug: "saint-lucia", name: "Saint Lucia", capital: "Castries", currency: "East Caribbean Dollar (XCD)", language: "English", subregion: "Eastern Caribbean" },
  { slug: "st-vincent-and-the-grenadines", name: "St. Vincent & the Grenadines", capital: "Kingstown", currency: "East Caribbean Dollar (XCD)", language: "English", subregion: "Eastern Caribbean" },
  { slug: "suriname", name: "Suriname", capital: "Paramaribo", currency: "Surinamese Dollar (SRD)", language: "Dutch", subregion: "Mainland Caribbean / South America" },
  { slug: "trinidad-and-tobago", name: "Trinidad & Tobago", capital: "Port of Spain", currency: "Trinidad & Tobago Dollar (TTD)", language: "English", subregion: "Eastern Caribbean" },
];

export const phase2Markets = [
  "Cuba", "Curaçao", "Aruba", "Cayman Islands", "U.S. Virgin Islands",
  "British Virgin Islands", "Martinique", "Guadeloupe", "Puerto Rico",
];

export const findMarket = (slug) => coreMarkets.find((m) => m.slug === slug);
