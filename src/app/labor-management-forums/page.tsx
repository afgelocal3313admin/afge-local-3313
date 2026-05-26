import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Target, MessageSquare, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Labor Management Forums",
  description:
    "Learn about AFGE Local 3313's labor-management partnership forums and how we collaborate with DOT management to improve the workplace.",
};

const forumGoals = [
  {
    title: "Pre-Decisional Involvement",
    description:
      "Union representatives participate in management decisions that affect bargaining unit employees before those decisions are finalized.",
  },
  {
    title: "Collaborative Problem-Solving",
    description:
      "Management and union work together to identify and resolve workplace issues through dialogue rather than formal proceedings.",
  },
  {
    title: "Improved Communication",
    description:
      "Regular forums ensure open lines of communication between employees, union representatives, and management at all levels.",
  },
  {
    title: "Workplace Improvements",
    description:
      "Joint initiatives to improve working conditions, safety, training opportunities, and employee satisfaction across DOT agencies.",
  },
];

const agencies = [
  {
    name: "FMCSA",
    full: "Federal Motor Carrier Safety Administration",
    mission: "Reduces crashes, injuries, and fatalities by advancing large truck and bus safety through collaboration, education, research, technology, and compliance.",
  },
  {
    name: "FTA",
    full: "Federal Transit Administration",
    mission: "Improves America's communities through public transportation.",
  },
  {
    name: "MARAD",
    full: "Maritime Administration",
    mission: "Fosters, promotes, and develops the maritime industry of the United States to meet the nation's economic and security needs.",
  },
  {
    name: "NHTSA",
    full: "National Highway Traffic Safety Administration",
    mission: "Saves lives, prevents injuries, and reduces economic costs due to road traffic crashes, through education, research, safety standards, and enforcement.",
  },
  {
    name: "PHMSA",
    full: "Pipeline and Hazardous Materials Safety Administration",
    mission: "Protects people and the environment by advancing the safe transportation of energy and other hazardous materials essential to daily life.",
  },
  {
    name: "OST",
    full: "Office of the Secretary of Transportation",
    mission: "Oversees the policies and programs of the Department of Transportation and coordinates transportation initiatives across all modes.",
  },
];

export default function LaborManagementForumsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-union-gold rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-union-gold font-medium mb-4">Partnership</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Labor Management Forums
            </h1>
            <p className="mt-4 text-xl text-white/80">
              Building a collaborative relationship between AFGE Local 3313 and
              DOT management to improve the federal workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
                Working Together for a Better Workplace
              </h2>
              <div className="section-divider w-20 mt-4" />
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                AFGE Local 3313 represents bargaining unit employees across six
                DOT agencies. Through labor-management forums, we partner with
                agency management to address workplace concerns, improve
                conditions, and ensure employees have a voice in decisions that
                affect them.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Since the creation of Executive Order 13522, AFGE has worked
                alongside the National Council on Federal Labor-Management
                Relations to promote cooperative labor-management partnerships
                throughout the federal government.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {forumGoals.map((goal) => (
                <div
                  key={goal.title}
                  className="bg-union-light p-6 rounded-xl"
                >
                  <h3 className="font-bold text-union-blue mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Forums Work */}
      <section className="py-20 bg-union-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Handshake className="w-12 h-12 text-union-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-union-blue">
              How Labor-Management Forums Work
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                icon: MessageSquare,
                title: "Regular Meetings",
                description:
                  "Union and management representatives meet regularly to discuss workplace issues, proposed changes, and employee concerns in an open, collaborative setting.",
              },
              {
                icon: Target,
                title: "Issue Resolution",
                description:
                  "Forums provide a mechanism to resolve issues before they become formal grievances, saving time and resources for both parties while achieving better outcomes.",
              },
              {
                icon: CheckCircle,
                title: "Joint Initiatives",
                description:
                  "Union and management work together on joint projects such as workplace safety improvements, training programs, telework policies, and employee engagement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-6 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-union-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-union-blue">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agencies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">
              Our DOT Agencies
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Labor-management forums are conducted at each DOT agency where
              Local 3313 represents employees.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((agency) => (
              <div
                key={agency.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={`/images/agencies/${agency.name.toLowerCase()}.png`}
                    alt={agency.full}
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <h3 className="font-bold text-union-blue">{agency.name}</h3>
                </div>
                <p className="text-xs text-gray-400 font-medium mb-2">
                  {agency.full}
                </p>
                <p className="text-sm text-gray-600">{agency.mission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Have a Workplace Concern?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Contact your union steward or agency vice president to raise issues
            for discussion at the next labor-management forum.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/union-officials"
              className="px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Find Your Representative <ArrowRight className="w-4 h-4" />
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
