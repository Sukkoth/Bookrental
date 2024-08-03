import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const spartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Store",
  description: "Rent your wanted books with less price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={spartan.className}>{children}</body>
    </html>
  );
}
