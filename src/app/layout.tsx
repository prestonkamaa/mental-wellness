import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import PrelineScriptWrapper from "./components/PrelineScriptWrapper";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-Bricolage-Grotesque",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Solus - Mental Health & Wellness",
  description: "Mental Health & Wellness App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} antialiased`}
      >
        <PrelineScriptWrapper />
        {children}
      </body>
    </html>
  );
}
