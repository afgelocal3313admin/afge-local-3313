"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const svgProps = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" } as const;
function FacebookIcon({ className }: { className?: string }) {
  return <svg {...svgProps} className={className}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
}
function TwitterIcon({ className }: { className?: string }) {
  return <svg {...svgProps} className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
import AISearch from "./AISearch";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Local 3313", href: "/about" },
      { name: "In The News", href: "/in-the-news" },
      { name: "Bylaws", href: "/docs/AFGE-Bylaws.pdf", external: true },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    name: "Leadership",
    href: "/union-officials",
    children: [
      { name: "Union Officials", href: "/union-officials" },
      { name: "President’s Message", href: "/presidents-message" },
      { name: "Labor-Management Forums", href: "/labor-management-forums" },
    ],
  },
  {
    name: "Membership",
    href: "/how-to-join",
    children: [
      { name: "How to Join", href: "/how-to-join" },
      { name: "New Member Orientation", href: "/new-member-orientation" },
      { name: "Member Benefits", href: "/benefits" },
      { name: "Where Do My Dues Go?", href: "/where-do-my-dues-go" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Documents & Forms", href: "/resources" },
      { name: "Collective Bargaining Agreements", href: "/collective-bargaining-agreements" },
      { name: "File a Grievance", href: "/grievance" },
      { name: "Prohibited Practices", href: "/prohibited-practices" },
      { name: "Meeting Recordings", href: "/meeting-recordings" },
    ],
  },
  { name: "News", href: "/news" },
  {
    name: "Meetings & Events",
    href: "/events",
    children: [
      { name: "Events & Meetings", href: "/events" },
      { name: "Meeting Recordings", href: "/meeting-recordings" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-union-blue-dark text-white/80 text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="hidden sm:inline">
            American Federation of Government Employees
          </span>
          <span className="sm:hidden text-xs">AFGE Local 3313</span>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://www.facebook.com/AFGE-Local-3313-Union-455572274492612"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-union-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com/AFGELocal3313"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-union-gold transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            <a
              href="https://www.afge.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-union-gold transition-colors"
            >
              AFGE National &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-union-blue shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/logos/afge-3313-icon.png"
                alt="AFGE Local 3313"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <div className="hidden sm:block leading-tight">
                <span className="text-white font-bold text-sm block">AFGE Local 3313</span>
                <span className="text-union-gold text-[10px] font-medium">Proud to Make America Work</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) =>
                item.children ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-white hover:text-union-gold transition-colors font-medium"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-[240px] border border-gray-100">
                        {item.children.map((child) =>
                          (child as any).external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-union-light hover:text-union-blue transition-colors"
                            >
                              {child.name}
                              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-gray-700 hover:bg-union-light hover:text-union-blue transition-colors"
                            >
                              {child.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-white hover:text-union-gold transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}

              <AISearch />

              <Link
                href="/contact"
                className="ml-3 px-5 py-2.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Join Us
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <AISearch />
              <button
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-union-blue-dark border-t border-white/10">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between w-full px-3 py-3 text-white hover:text-union-gold transition-colors font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) =>
                          (child as any).external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-union-gold transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-white/80 hover:text-union-gold transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-3 text-white hover:text-union-gold transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="flex items-center gap-3 px-3 pt-3">
                <a
                  href="https://www.facebook.com/AFGE-Local-3313-Union-455572274492612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-union-gold"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/AFGELocal3313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-union-gold"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
              <Link
                href="/contact"
                className="block mx-3 mt-3 px-5 py-2.5 bg-union-red text-white rounded-lg font-semibold text-center hover:bg-red-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
