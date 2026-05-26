import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AFGE Local 3313 | Department of Transportation Employees Union",
    template: "%s | AFGE Local 3313",
  },
  description:
    "AFGE Local 3313 represents employees of the U.S. Department of Transportation including NHTSA, FMCSA, FTA, PHMSA, MARAD, and OST. Protecting federal workers' rights.",
  keywords: [
    "AFGE",
    "Local 3313",
    "union",
    "Department of Transportation",
    "DOT",
    "NHTSA",
    "FMCSA",
    "FTA",
    "PHMSA",
    "MARAD",
    "OST",
    "federal employees",
    "labor union",
  ],
  openGraph: {
    title: "AFGE Local 3313",
    description:
      "Representing Department of Transportation employees. Protecting your rights, advocating for fair treatment.",
    url: "https://afge-local3313.org",
    siteName: "AFGE Local 3313",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
