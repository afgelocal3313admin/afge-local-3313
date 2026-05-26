import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Stay up to date with the latest news, member communications, and policy updates from AFGE Local 3313.",
};

const newsArticles = [
  {
    title: "Member Communication #4 - March 2025",
    date: "March 24, 2025",
    category: "Member Communication",
    excerpt:
      "Important updates regarding ongoing negotiations, workplace policy changes, and member resources. Read the latest from your union leadership about what is happening at DOT.",
    featured: true,
  },
  {
    title: "Return to Office Guidance Update",
    date: "February 2025",
    category: "Policy Update",
    excerpt:
      "OPM has issued new return-to-office guidance. Learn what this means for DOT employees and how your collective bargaining agreement protects your telework arrangements.",
    featured: false,
  },
  {
    title: "Message to Members - Return to Office",
    date: "February 2025",
    category: "Member Communication",
    excerpt:
      "Your union leadership addresses the latest developments regarding return-to-office mandates and the steps we are taking to protect member interests.",
    featured: false,
  },
  {
    title: "OPM Hiring Freeze Guidance",
    date: "January 2025",
    category: "Policy Update",
    excerpt:
      "Information about the hiring freeze and its impact on DOT employees. Understanding your rights during this period.",
    featured: false,
  },
  {
    title: "DEIA Executive Order Impact",
    date: "January 2025",
    category: "Policy Update",
    excerpt:
      "OPM guidance regarding recent executive orders and their effect on diversity, equity, inclusion, and accessibility programs.",
    featured: false,
  },
  {
    title: "New Member Orientation Materials",
    date: "January 2025",
    category: "Membership",
    excerpt:
      "Welcome to AFGE Local 3313! Access orientation materials to learn about your benefits, rights, and how your union works for you.",
    featured: false,
  },
  {
    title: "FMCSA Master Labor Agreement Updated",
    date: "January 2025",
    category: "Contract Update",
    excerpt:
      "The updated Master Labor Agreement for FMCSA employees is now available. Review the changes and improvements negotiated on your behalf.",
    featured: false,
  },
  {
    title: "Newsletter - Local 3313 Spotlight",
    date: "April 2025",
    category: "Newsletter",
    excerpt:
      "Read our latest newsletter covering union activities, member spotlights, upcoming events, and important information for all DOT employees.",
    featured: false,
  },
];

export default function NewsPage() {
  const featuredArticle = newsArticles.find((a) => a.featured);
  const otherArticles = newsArticles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/news.jpg"
          alt="News & Updates"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            News & Updates
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Stay informed with the latest from AFGE Local 3313
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-16">
              <div className="bg-union-blue rounded-2xl p-8 md:p-12">
                <span className="inline-block px-4 py-1.5 bg-union-gold text-union-blue-dark text-sm font-bold rounded-full mb-4">
                  Latest Update
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-union-blue/10 text-union-blue text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-union-blue mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
