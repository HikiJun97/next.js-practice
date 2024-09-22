import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Next App</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
