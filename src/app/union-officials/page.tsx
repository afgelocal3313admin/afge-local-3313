import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Shield, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Union Officials",
  description:
    "Meet the elected officers and stewards of AFGE Local 3313 representing DOT employees across NHTSA, FMCSA, FTA, PHMSA, and OST.",
};

type Officer = {
  role: string;
  name: string;
  email?: string;
  vacant?: boolean;
};

type AgencySection = {
  agency: string;
  agencyFull: string;
  logo: string;
  mission: string;
  officers: Officer[];
};

const executiveBoard: Officer[] = [
  { role: "President", name: "Jennifer Rodes", email: "jennifer.rodes@dot.gov" },
  { role: "Executive Vice President", name: "Edward Acosta", email: "edward.acosta@dot.gov" },
  { role: "Secretary-Treasurer", name: "Jennifer Rodes", email: "jennifer.rodes@dot.gov" },
  { role: "Chief Steward", name: "Vacant", vacant: true },
  { role: "Assistant Treasurer-Secretary", name: "Vacant", vacant: true },
];

const agencySections: AgencySection[] = [
  {
    agency: "FMCSA",
    agencyFull: "Federal Motor Carrier Safety Administration",
    logo: "/images/agencies/fmcsa.png",
    mission:
      "Reduces crashes, injuries, and fatalities by advancing large truck and bus safety through collaboration, education, research, technology, and compliance.",
    officers: [
      { role: "Vice President", name: "Vacant", vacant: true },
      { role: "Steward", name: "Connor Croghan", email: "connor.croghan@dot.gov" },
    ],
  },
  {
    agency: "FTA",
    agencyFull: "Federal Transit Administration",
    logo: "/images/agencies/fta.png",
    mission:
      "Improves America's communities through public transportation by providing financial and technical assistance to local transit systems.",
    officers: [
      { role: "Vice President", name: "Peter Regan", email: "peter.regan@dot.gov" },
      { role: "Steward", name: "Shanell Watson" },
      { role: "Steward", name: "Anna Curtis" },
    ],
  },
  {
    agency: "MARAD",
    agencyFull: "Maritime Administration",
    logo: "/images/agencies/marad.png",
    mission:
      "Fosters, promotes, and develops the maritime industry of the United States to meet the nation's economic and security needs.",
    officers: [
      { role: "Vice President", name: "Tsedey Aragie", email: "tsedey.aragie@dot.gov" },
      { role: "Second Vice President", name: "Henry Puppe", email: "henry.puppe@dot.gov" },
    ],
  },
  {
    agency: "NHTSA",
    agencyFull: "National Highway Traffic Safety Administration",
    logo: "/images/agencies/nhtsa.png",
    mission:
      "Saves lives, prevents injuries, and reduces economic costs due to road traffic crashes through education, research, safety standards, and enforcement.",
    officers: [
      { role: "Vice President", name: "Edward Acosta", email: "edward.acosta@dot.gov" },
      { role: "Second Vice President", name: "Derrell Lyles", email: "derrell.lyles@dot.gov" },
      { role: "Steward", name: "Wellington Felix", email: "wellington.felix@dot.gov" },
    ],
  },
  {
    agency: "PHMSA",
    agencyFull: "Pipeline and Hazardous Materials Safety Administration",
    logo: "/images/agencies/phmsa.png",
    mission:
      "Protects people and the environment by advancing the safe transportation of energy and other hazardous materials essential to daily life.",
    officers: [
      { role: "Vice President", name: "William Fink", email: "william.fink@dot.gov" },
      { role: "Second Vice President", name: "Matthew Hufford", email: "matthew.hufford@dot.gov" },
    ],
  },
  {
    agency: "OST",
    agencyFull: "Office of the Secretary of Transportation",
    logo: "/images/agencies/ost.png",
    mission:
      "Oversees the policies and programs of the Department of Transportation and coordinates transportation initiatives across all modes.",
    officers: [
      { role: "Vice President", name: "Stuart Hindman", email: "stuart.hindman@dot.gov" },
      { role: "Steward", name: "Suresh Mangal" },
    ],
  },
];

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
        officer.vacant
          ? "border-dashed border-gray-300 bg-gray-50"
          : "border-gray-100 bg-white hover:shadow-md hover:border-union-gold/30"
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-union-blue/10 flex items-center justify-center shrink-0 overflow-hidden">
        {officer.vacant ? (
          <Users className="w-5 h-5 text-gray-400" />
        ) : (
          <span className="text-union-blue font-bold text-lg">
            {officer.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p
          className={`font-semibold ${
            officer.vacant ? "text-gray-400 italic" : "text-union-blue"
          }`}
        >
          {officer.name}
        </p>
        <p className="text-sm text-gray-500">{officer.role}</p>
      </div>
      {officer.email && !officer.vacant && (
        <a
          href={`mailto:${officer.email}`}
          className="p-2 text-union-blue/50 hover:text-union-blue hover:bg-union-blue/10 rounded-lg transition-colors shrink-0"
          title={`Email ${officer.name}`}
        >
          <Mail className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

export default function UnionOfficialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/union-officials.jpg"
          alt="Union Officials"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Union Officials
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Meet the elected officers and stewards who represent you. Our
              leadership team works to protect your rights and advance your
              interests across all DOT agencies.
            </p>
            <Link
              href="/presidents-message"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Read the President&apos;s Message <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-union-gold/10 border border-union-gold/20 rounded-full text-union-gold text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
              Executive Board
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              The Executive Board oversees all union operations, sets policy
              direction, and represents the membership in negotiations with
              management.
            </p>
          </div>

          {/* President Highlight */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-union-blue to-union-blue-dark rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-union-gold/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-union-gold/50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">JR</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Jennifer Rodes
                </h3>
                <p className="text-union-gold font-medium mt-1">
                  President, AFGE Local 3313
                </p>
                <a
                  href="mailto:jennifer.rodes@dot.gov"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  jennifer.rodes@dot.gov
                </a>
              </div>
            </div>
          </div>

          {/* Board Members */}
          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            {executiveBoard
              .filter((o) => o.role !== "President")
              .map((officer, i) => (
                <OfficerCard key={`board-${i}`} officer={officer} />
              ))}
          </div>
        </div>
      </section>

      {/* Agency Sections */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
              Agency Representatives
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Each DOT agency has dedicated vice presidents and stewards to
              address agency-specific issues and represent employees.
            </p>
          </div>

          <div className="space-y-8">
            {agencySections.map((section) => (
              <div
                key={section.agency}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <Image
                      src={section.logo}
                      alt={section.agencyFull}
                      width={48}
                      height={48}
                      className="h-12 w-auto shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-union-blue">
                        {section.agency}{" "}
                        <span className="font-normal text-gray-400">|</span>{" "}
                        <span className="text-base font-normal text-gray-600">
                          {section.agencyFull}
                        </span>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {section.mission}
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.officers.map((officer, i) => (
                      <OfficerCard
                        key={`${section.agency}-${i}`}
                        officer={officer}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-union-light rounded-2xl p-12 border-2 border-dashed border-union-blue/20">
            <Users className="w-16 h-16 text-union-blue/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-union-blue/60">
              Officer Photos Coming Soon
            </h3>
            <p className="mt-2 text-gray-400">
              Individual officer photos will be added here. Check back for
              updates!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Want to Become a Steward?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Union stewards are the backbone of our local. If you are passionate
            about protecting employee rights and want to make a difference,
            consider becoming a steward.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            Express Your Interest <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
