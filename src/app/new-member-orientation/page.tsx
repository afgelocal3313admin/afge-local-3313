import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, Users, FileText, Scale, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "New Member Orientation",
  description:
    "Welcome to AFGE Local 3313! Everything new members need to know about your union, your rights, and how to get the most out of your membership.",
};

const sections = [
  {
    icon: Shield,
    title: "Your Rights as a Federal Employee",
    items: [
      "Right to union representation during investigatory interviews (Weingarten Rights)",
      "Protection from unfair labor practices by management",
      "Right to file grievances through the negotiated grievance procedure",
      "Access to your Collective Bargaining Agreement (CBA)",
      "Right to participate in union activities without retaliation",
      "Protection under the Federal Service Labor-Management Relations Statute",
    ],
  },
  {
    icon: Users,
    title: "What Your Union Does",
    items: [
      "Negotiates Collective Bargaining Agreements with DOT management",
      "Represents employees in grievances and disciplinary actions",
      "Advocates for fair pay, benefits, and working conditions",
      "Provides information and guidance on workplace issues",
      "Monitors management compliance with labor agreements",
      "Partners with management to resolve issues at the lowest level",
    ],
  },
  {
    icon: FileText,
    title: "Key Documents to Know",
    items: [
      "Your agency's Collective Bargaining Agreement (CBA)",
      "Weingarten Rights card — keep one at your desk",
      "AFGE Constitution and Local 3313 Bylaws",
      "SF-1187 — dues authorization form",
      "Grievance filing procedures and timelines",
    ],
  },
  {
    icon: Scale,
    title: "Your Responsibilities as a Member",
    items: [
      "Stay informed about union activities and communications",
      "Attend monthly union meetings when possible",
      "Report workplace issues to your steward promptly",
      "Support your fellow bargaining unit employees",
      "Vote in union elections and on contract ratification",
    ],
  },
];

const agencies = [
  { name: "FMCSA", full: "Federal Motor Carrier Safety Administration", employees: 207 },
  { name: "FTA", full: "Federal Transit Administration", employees: 190 },
  { name: "MARAD", full: "Maritime Administration", employees: 168 },
  { name: "NHTSA", full: "National Highway Traffic Safety Administration", employees: 270 },
  { name: "OST", full: "Office of the Secretary of Transportation", employees: 450 },
  { name: "PHMSA", full: "Pipeline and Hazardous Materials Safety Administration", employees: 190 },
];

export default function NewMemberOrientationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/team.jpg"
          alt="New Member Orientation"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-union-gold font-medium mb-4">Welcome!</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              New Member Orientation
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Welcome to AFGE Local 3313! Here is everything you need to know
              about your union, your rights, and how to make the most of your
              membership.
            </p>
          </div>
        </div>
      </section>

      {/* DOT Mission */}
      <section className="py-12 bg-union-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-union-blue shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold text-union-blue">Our Mission</h2>
              <p className="mt-1 text-gray-600">
                To deliver the world&apos;s leading transportation system,
                serving the American people and economy through the safe,
                efficient, sustainable, and equitable movement of people and
                goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Represent */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
              Who We Represent
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              AFGE Local 3313 is the exclusive representative for federal
              bargaining unit employees across six DOT agencies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((agency) => (
              <div
                key={agency.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <Image
                  src={`/images/agencies/${agency.name.toLowerCase()}.png`}
                  alt={agency.full}
                  width={48}
                  height={48}
                  className="h-12 w-auto shrink-0"
                />
                <div>
                  <h3 className="font-bold text-union-blue">{agency.name}</h3>
                  <p className="text-sm text-gray-500">{agency.full}</p>
                  <p className="text-xs text-union-gold font-semibold mt-1">
                    {agency.employees} bargaining employees
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
              What You Need to Know
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-union-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-union-blue">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-union-gold rounded-full mt-2 shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Reminder */}
      <section className="py-16 bg-union-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">
            Remember: AFGE Is Your Voice on Capitol Hill
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            AFGE is the only organization defending your rights as a federal
            employee in Congress. Your membership strengthens our ability to
            advocate for all federal workers.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-union-blue">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore your benefits, meet your representatives, or reach out with
            any questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/benefits"
              className="px-8 py-3.5 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors flex items-center gap-2"
            >
              View Benefits <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/union-officials"
              className="px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Meet Your Representatives
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border-2 border-union-blue text-union-blue rounded-lg font-semibold hover:bg-union-blue hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
