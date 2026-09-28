export const siteConfig = {
  name: "Ratnapur Jewellers",
  tagline: "A decade of excellence",
  description: "Personalize your jewelry with our expertise. Crafted with pride in Nepal — A decade of excellence.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ratnapurjewellers.com",
  ogImage: "/og-image.jpg",
  contact: {
    address: "Chhetrapati, Kathmandu, Nepal",
    phoneLandline: "01-5339147",
    phoneMobile: "+977 9706103357",
    whatsappNumber: "9779706103357",
    whatsappUrl: "https://wa.me/9779706103357?text=Hello%20Ratnapur%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20your%20jewelry.",
    email: "info@ratnapurjewellers.com",
  },
  highlights: [
    "A decade of excellence",
    "Crafted with pride in Nepal",
    "Worldwide delivery",
    "Personalized jewelry expertise",
  ],
  links: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    whatsapp: "https://wa.me/9779706103357?text=Hello%20Ratnapur%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20your%20jewelry.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
