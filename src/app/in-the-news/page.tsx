import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "In The News",
  description:
    "News coverage and media mentions about AFGE Local 3313, federal employee issues, and DOT labor relations.",
};

const newsItems = [
  {
    title: "AFGE Allies Launch Civil Service Strong",
    source: "AFGE National",
    date: "2025",
    excerpt:
      "AFGE and allies launch Civil Service Strong to help federal workers understand and exercise their rights in the face of ongoing attacks on the federal workforce.",
    url: "https://www.afge.org/article/afge-allies-launch-civil-service-strong-to-help-federal-workers-understand-exercise-their-rights/",
    category: "National",
  },
  {
    title: "Federal Employees Fight Return-to-Office Mandates",
    source: "Government Executive",
    date: "March 2025",
    excerpt:
      "Federal employee unions, including AFGE, push back against broad return-to-office mandates, arguing for continued telework flexibility where performance supports it.",
    url: "https://www.govexec.com",
    category: "Policy",
  },
  {
    title: "AFGE Challenges Proposed Federal Workforce Reductions",
    source: "Federal News Network",
    date: "February 2025",
    excerpt:
      "AFGE National President speaks out against proposed reductions in force, emphasizing the critical role federal employees play in public safety and services.",
    url: "https://www.federalnewsnetwork.com",
    category: "Workforce",
  },
  {
    title: "DOT Employees Rally for Fair Treatment",
    source: "AFGE District 14",
    date: "January 2025",
    excerpt:
      "Department of Transportation bargaining unit employees across multiple agencies join together to advocate for fair workplace policies and collective bargaining rights.",
    url: "https://www.afge.org/districts/district-14",
    category: "Local",
  },
  {
    title: "Understanding Your Weingarten Rights",
    source: "AFGE National",
    date: "2024",
    excerpt:
      "A comprehensive guide for federal employees on their right to union representation during investigatory interviews — a fundamental protection for all bargaining unit employees.",
    url: "https://www.afge.org",
    category: "Education",
  },
  {
    title: "Federal Pay Raise and Locality Adjustments",
    source: "FedSmith",
    date: "2024",
    excerpt:
      "Details on the latest federal pay raise and locality pay adjustments affecting DOT employees. AFGE continues to advocate for competitive compensation.",
    url: "https://www.fedsmith.com",
    category: "Compensation",
  },
];

export default function InTheNewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-union-gold rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-union-gold font-medium mb-4">Media & Coverage</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              In The News
            </h1>
            <p className="mt-4 text-xl text-white/80">
              News coverage, media mentions, and important developments
              affecting federal employees and AFGE members.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-union-blue/10 text-union-blue text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-union-blue group-hover:text-union-red transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-gray-400 font-medium">
                    Source: {item.source}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-union-blue hover:text-union-red transition-colors"
                  >
                    Read More <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Links */}
      <section className="py-16 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-union-blue text-center mb-8">
            Follow Federal Employee News
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "AFGE National", url: "https://www.afge.org" },
              { name: "Government Executive", url: "https://www.govexec.com" },
              { name: "Federal News Network", url: "https://www.federalnewsnetwork.com" },
              { name: "FedSmith", url: "https://www.fedsmith.com" },
            ].map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-union-gold/30 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-union-blue">
                  {source.name}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Subscribe to our newsletter and follow us on social media for the
            latest union news and updates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/news"
              className="px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Union News <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
