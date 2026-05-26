import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Scale,
  Users,
  FileText,
  ArrowRight,
  CheckCircle,
  Calendar,
  Newspaper,
  BookOpen,
  Download,
  Phone,
  UserPlus,
} from "lucide-react";
import Newsletter from "@/components/Newsletter";

const agencies = [
  {
    name: "NHTSA",
    full: "National Highway Traffic Safety Administration",
    logo: "/images/agencies/nhtsa.png",
  },
  {
    name: "FMCSA",
    full: "Federal Motor Carrier Safety Administration",
    logo: "/images/agencies/fmcsa.png",
  },
  {
    name: "FTA",
    full: "Federal Transit Administration",
    logo: "/images/agencies/fta.png",
  },
  {
    name: "PHMSA",
    full: "Pipeline and Hazardous Materials Safety Administration",
    logo: "/images/agencies/phmsa.png",
  },
  {
    name: "MARAD",
    full: "Maritime Administration",
    logo: "/images/agencies/marad.png",
  },
  {
    name: "OST",
    full: "Office of the Secretary of Transportation",
    logo: "/images/agencies/ost.png",
  },
];

const features = [
  {
    icon: Shield,
    title: "Workplace Protections",
    description:
      "We fight for your rights under federal labor law, ensuring fair treatment, due process, and protection from unfair labor practices.",
  },
  {
    icon: Scale,
    title: "Collective Bargaining",
    description:
      "Our negotiated agreements ensure fair pay, benefits, telework policies, and working conditions for all bargaining unit employees.",
  },
  {
    icon: Users,
    title: "Representation",
    description:
      "From informal resolutions to formal grievances, our trained stewards represent you at every step of the process.",
  },
  {
    icon: FileText,
    title: "Resources & Support",
    description:
      "Access collective bargaining agreements, know your Weingarten rights, and stay informed with member communications.",
  },
];

const newsItems = [
  {
    title: "Member Communication Update",
    date: "March 2025",
    excerpt:
      "Important updates regarding workplace policies, telework agreements, and upcoming negotiations. Stay informed about changes affecting your rights.",
    category: "Update",
  },
  {
    title: "Return to Office Guidance",
    date: "February 2025",
    excerpt:
      "Key information about OPM return-to-office guidance and what it means for DOT employees. Know your rights under your collective bargaining agreement.",
    category: "Policy",
  },
  {
    title: "New Member Orientation",
    date: "January 2025",
    excerpt:
      "Welcome to AFGE Local 3313! Learn about your union benefits, representation rights, and how to get involved.",
    category: "Membership",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <Image
          src="/images/banners/hero-main.jpg"
          alt="AFGE Local 3313"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-union-gold/20 border border-union-gold/40 rounded-full text-union-gold text-sm font-medium mb-6">
              American Federation of Government Employees
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              AFGE Local 3313
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white/90 font-light">
              Representing Department of Transportation Employees
            </p>
            <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
              Protecting your rights, advocating for fair treatment, and
              ensuring safe working conditions for federal employees across DOT
              agencies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/benefits"
                className="px-8 py-3.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                Member Benefits <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 bg-white/10 backdrop-blur text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Toolbar */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 divide-x divide-gray-100">
            {[
              { icon: UserPlus, label: "Join Now", href: "/how-to-join", color: "text-union-red" },
              { icon: Scale, label: "Your CBA", href: "/collective-bargaining-agreements", color: "text-union-blue" },
              { icon: Shield, label: "Know Your Rights", href: "/resources", color: "text-green-600" },
              { icon: Phone, label: "Get Help", href: "/grievance", color: "text-amber-600" },
              { icon: Download, label: "Forms & Docs", href: "/resources", color: "text-purple-600" },
              { icon: BookOpen, label: "FAQ", href: "/faq", color: "text-sky-600" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex flex-col items-center gap-2 py-5 hover:bg-gray-50 transition-colors group"
              >
                <action.icon className={`w-6 h-6 ${action.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 text-center">
                  {action.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Agencies Bar */}
      <section className="bg-union-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-union-blue/60 uppercase tracking-wider mb-8">
            Representing Employees Across DOT Agencies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {agencies.map((agency) => (
              <div
                key={agency.name}
                className="flex flex-col items-center gap-2 group"
              >
                <Image
                  src={agency.logo}
                  alt={agency.full}
                  width={48}
                  height={48}
                  className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs font-semibold text-union-blue/70 group-hover:text-union-blue transition-colors">
                  {agency.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
              What Local 3313 Does For You
            </h2>
            <div className="section-divider w-20 mx-auto mt-4" />
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              As your union, we work every day to protect and advance the rights
              and interests of DOT employees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-union-gold/30 transition-all group"
              >
                <div className="w-14 h-14 bg-union-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-union-blue transition-colors">
                  <feature.icon className="w-7 h-7 text-union-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-union-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20">
        <Image
          src="/images/banners/join.jpg"
          alt="Join AFGE Local 3313"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Stronger Together
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Your union membership gives you a voice in your workplace. Together,
            we negotiate better conditions for all employees.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/how-to-join"
              className="px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/benefits"
              className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* Know Your Rights */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
                Know Your Rights
              </h2>
              <div className="section-divider w-20 mt-4" />
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                As a federal employee, you have important rights under the
                Federal Service Labor-Management Relations Statute. Your union is
                here to help you understand and exercise those rights.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Weingarten Rights - right to union representation during investigatory interviews",
                  "Access to your Collective Bargaining Agreement",
                  "Protection from unfair labor practices",
                  "Right to file grievances through proper channels",
                  "Representation in disciplinary actions",
                  "Information about workplace policies and changes",
                ].map((right) => (
                  <li key={right} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{right}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/resources"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
              >
                Access Resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/banners/cba.jpg"
                alt="Collective Bargaining Agreement"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* News & Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
                Latest News & Updates
              </h2>
              <div className="section-divider w-20 mt-4" />
            </div>
            <Link
              href="/news"
              className="text-union-blue font-semibold hover:text-union-red transition-colors flex items-center gap-1"
            >
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-union-blue/10 text-union-blue text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-union-blue group-hover:text-union-red transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/events"
              className="flex items-center gap-4 p-6 bg-union-light rounded-xl hover:bg-union-blue hover:text-white transition-all group"
            >
              <Calendar className="w-10 h-10 text-union-blue group-hover:text-union-gold shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Upcoming Meetings</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/70">
                  View our meeting schedule
                </p>
              </div>
            </Link>
            <Link
              href="/news"
              className="flex items-center gap-4 p-6 bg-union-light rounded-xl hover:bg-union-blue hover:text-white transition-all group"
            >
              <Newspaper className="w-10 h-10 text-union-blue group-hover:text-union-gold shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Newsletters</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/70">
                  Read our latest communications
                </p>
              </div>
            </Link>
            <Link
              href="/grievance"
              className="flex items-center gap-4 p-6 bg-union-light rounded-xl hover:bg-union-blue hover:text-white transition-all group"
            >
              <Shield className="w-10 h-10 text-union-blue group-hover:text-union-gold shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Need Help?</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/70">
                  File a grievance or get support
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
