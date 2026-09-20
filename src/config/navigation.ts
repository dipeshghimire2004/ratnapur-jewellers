export interface NavItem {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Collections", href: "/collections" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Our Story", href: "/about#story" },
    { title: "Careers", href: "/careers" },
  ],
  support: [
    { title: "Contact", href: "/contact" },
    { title: "FAQs", href: "/faq" },
    { title: "Shipping & Returns", href: "/shipping" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
} as const;
