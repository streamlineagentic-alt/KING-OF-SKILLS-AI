export const SITE = {
  name: "King of Skills AI",
  tagline: "The Single Source of Truth for the AI Era",
  domain: "kingofskills.ai",
  handle: "@kingofskillsai",
  nickname: "Kingo",
  description:
    "Daily AI intelligence, master prompts, skill frameworks, and courses — for ambitious professionals who want to master the AI era.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Daily Prompt", href: "/prompts" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
] as const;

export const SOCIAL_LINKS = [
  { platform: "X / Twitter", href: "https://x.com/kingofskillsai" },
  { platform: "Instagram", href: "https://instagram.com/kingofskillsai" },
  { platform: "LinkedIn", href: "https://linkedin.com/company/kingofskillsai" },
  { platform: "TikTok", href: "https://tiktok.com/@kingofskillsai" },
] as const;

export const FREE_TIER = {
  name: "Free Tier",
  items: [
    "Social profiles @kingofskillsai",
    "The King's Brief — weekly newsletter",
    "The King's Intelligence — daily AI news",
    "The Daily Prompt — one mega-prompt per day",
  ],
} as const;

export const PAID_PRODUCTS = [
  {
    name: "The King's Prompt Bundle",
    description: "500+ mega-prompts for every business function",
    price: "$97 – $297",
  },
  {
    name: "The King's Codex",
    description: "Frameworks and guidelines for AI-driven operations",
    price: "$97 – $197",
  },
  {
    name: "King of Skills Academy",
    description: "Deep skill courses to master the AI era",
    price: "$197 – $497",
  },
] as const;

export const PREMIUM_PRODUCTS = [
  {
    name: "The King's Vault",
    description: "Premium newsletter with exclusive insights and early access",
    price: "$19/month",
  },
  {
    name: "The King's Workshop",
    description: "Live sessions with hands-on AI skill building",
    price: "$49/session",
  },
  {
    name: "The King's Agency",
    description: "Done-for-you AI implementation for your business",
    price: "$2,000 – $10,000",
  },
] as const;
