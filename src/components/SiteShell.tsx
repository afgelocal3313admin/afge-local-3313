"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import SocialBar from "./SocialBar";
import AIChatWidget from "./AIChatWidget";
import ShareButton from "./ShareButton";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <SocialBar />
      <ShareButton />
      <AIChatWidget />
    </>
  );
}
