export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "TicTacToe",
      href: "/tictactoe",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/HikiJun97/next.js-practice",
    docs: "https://ui.shadcn.com",
  },
}
