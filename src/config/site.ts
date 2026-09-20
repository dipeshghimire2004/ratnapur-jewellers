export const siteConfig = {
  name: "Ratnapur Jewellers",
  description: "Exquisite handcrafted jewellery — timeless elegance, modern craftsmanship.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ratnapurjewellers.com",
  ogImage: "/og-image.jpg",
  links: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
} as const;

export type SiteConfig = typeof siteConfig;
