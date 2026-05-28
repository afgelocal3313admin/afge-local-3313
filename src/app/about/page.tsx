import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Heart, Award, Mail, Shield, Scale, Megaphone, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AFGE Local 3313, representing Department of Transportation employees across NHTSA, FMCSA, FTA, PHMSA, MARAD, and OST.",
};

const values = [
  {
    icon: Shield,
    title: "Protect Our Rights",
    description:
      "We defend your workplace rights under federal labor law, ensuring fair treatment, due process, and protection from prohibited personnel practices.",
  },
  {
    icon: Users,
    title: "Empower Our Members",
    description:
      "We provide training, resources, and representation that empower every member to know their rights and speak up with confidence.",
  },
  {
    icon: Scale,
    title: "Advocate for Fairness",
    description:
      "We negotiate collective bargaining agreements and advocate for fair pay, benefits, telework policies, and equitable working conditions.",
  },
  {
    icon: Heart,
    title: "Serve Our Communities",
    description:
      "We serve DOT employees who keep America's transportation safe — from highways to pipelines, transit systems to maritime routes.",
  },
];

const executiveBoard = [
  {
    name: "Jennifer Rodes",
    role: "President & Secretary-Treasurer",
    agency: "DOT",
    email: "jennifer.rodes@dot.gov",
    bio: "Leading AFGE Local 3313 in protecting the rights of DOT employees across all six agencies. Committed to transparency, member engagement, and strong collective bargaining.",
  },
  {
    name: "Edward Acosta",
    role: "Executive Vice President",
    agency: "NHTSA",
    email: "edward.acosta@dot.gov",
    bio: "Serving as Executive Vice President and NHTSA Vice President, advocating for highway safety employees and supporting the local's mission across DOT.",
  },
];

const agencyVPs = [
  { name: "Peter Regan", role: "Vice President", agency: "FTA", email: "peter.regan@dot.gov" },
  { name: "Tsedey Aragie", role: "Vice President", agency: "MARAD", email: "tsedey.aragie@dot.gov" },
  { name: "Edward Acosta", role: "Vice President", agency: "NHTSA", email: "edward.acosta@dot.gov" },
  { name: "Vacant", role: "Vice President", agency: "FMCSA", vacant: true },
  { name: "Vacant", role: "Vice President", agency: "PHMSA", vacant: true },
  { name: "Vacant", role: "Vice President", agency: "OST", vacant: true },
];

const timeline = [
  {
    year: "Est.",
    title: "Local 3313 Chartered",
    description: "AFGE Local 3313 was chartered to represent employees of the U.S. Department of Transportation.",
  },
  {
    year: "Ongoing",
    title: "5 Active CBAs",
    description: "Successfully negotiated and maintained collective bargaining agreements across FMCSA, FTA, MARAD, NHTSA, and PHMSA/OST.",
  },
  {
    year: "Today",
    title: "1,475+ Members Strong",
    description: "Representing bargaining unit employees across six DOT agencies, fighting for fair treatment every day.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Banner Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/images/logos/afge-3313-banner.png"
            alt="AFGE Local 3313 — Proud to Make America Work — American Federation of Government Employees, United States Department of Transportation"
            width={1916}
            height={821}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-union-blue">
                About AFGE Local 3313
              </h1>
              <div className="section-divider w-20 mt-4" />
              <div className="mt-8 space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  AFGE Local 3313 is a local chapter of the <strong>American Federation
                  of Government Employees (AFGE)</strong>, the largest federal employee
                  union representing over 750,000 federal and D.C. government
                  workers nationwide and overseas.
                </p>
                <p>
                  Our local represents <strong>1,475+ bargaining unit employees</strong> across
                  six agencies within the U.S. Department of Transportation:
                  NHTSA, FMCSA, FTA, PHMSA, MARAD, and the Office of the Secretary.
                </p>
                <p>
                  We negotiate collective bargaining agreements, represent
                  employees in workplace disputes, and advocate for policies that
                  protect the rights and well-being of federal workers. We are
                  your voice at the table.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/how-to-join"
                  className="px-6 py-3 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  Join the Union <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/where-do-my-dues-go"
                  className="px-6 py-3 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
                >
                  Where Do My Dues Go?
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/rally/rally-march-dc.jpg"
                alt="AFGE members marching for federal employee rights"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-union-blue text-white p-5 rounded-xl shadow-lg hidden lg:block">
                <p className="text-3xl font-bold text-union-gold">1,475+</p>
                <p className="text-sm text-white/80">Bargaining Unit Employees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-union-blue">Our Mission</h2>
            <div className="section-divider w-20 mx-auto mt-4" />
            <p className="mt-8 text-xl text-gray-700 leading-relaxed">
              To protect and advance the rights and interests of Department of
              Transportation employees through effective representation,
              collective bargaining, and member advocacy. We strive to ensure
              that every employee is treated with fairness, dignity, and respect
              in the workplace.
            </p>
            <p className="mt-6 text-2xl font-bold text-union-blue italic">
              &ldquo;Your Union. Your Voice. Your Future.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">What We Stand For</h2>
            <div className="section-divider w-20 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-union-gold/30 transition-all group"
              >
                <div className="w-16 h-16 bg-union-blue/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-union-blue transition-colors">
                  <value.icon className="w-8 h-8 text-union-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-union-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">Our Leadership</h2>
            <div className="section-divider w-20 mx-auto mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Elected by members, for members. Our officers work to protect your rights
              and represent your interests at every level.
            </p>
          </div>

          {/* Executive Board */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            {executiveBoard.map((officer) => (
              <div
                key={officer.name + officer.role}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-union-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {officer.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-union-blue">{officer.name}</h3>
                <p className="text-union-red font-semibold text-sm">{officer.role}</p>
                <p className="text-gray-500 text-xs mt-1">{officer.agency}</p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {officer.bio}
                </p>
                {officer.email && (
                  <a
                    href={`mailto:${officer.email}`}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm text-union-blue hover:text-union-red transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {officer.email}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Agency VPs */}
          <h3 className="text-xl font-bold text-union-blue text-center mb-6">
            Agency Vice Presidents
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-10">
            {agencyVPs.map((vp) => (
              <div
                key={vp.agency}
                className={`bg-white rounded-xl border border-gray-100 p-4 text-center ${
                  vp.vacant ? "opacity-60" : ""
                }`}
              >
                <Image
                  src={`/images/agencies/${vp.agency.toLowerCase()}.png`}
                  alt={vp.agency}
                  width={40}
                  height={40}
                  className="h-10 w-auto mx-auto mb-2"
                />
                <p className="font-bold text-union-blue text-sm">{vp.agency}</p>
                <p className={`text-xs mt-1 ${vp.vacant ? "text-gray-400 italic" : "text-gray-600"}`}>
                  {vp.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/union-officials"
              className="inline-flex items-center gap-2 px-6 py-3 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
            >
              View All Union Officials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Agencies We Represent */}
      <section className="py-20 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white">
              Agencies We Represent
            </h2>
            <div className="section-divider w-20 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "NHTSA",
                full: "National Highway Traffic Safety Administration",
                members: 270,
                description:
                  "Saves lives, prevents injuries, and reduces economic costs due to road traffic crashes through education, research, and enforcement.",
              },
              {
                name: "FMCSA",
                full: "Federal Motor Carrier Safety Administration",
                members: 207,
                description:
                  "Reduces crashes, injuries, and fatalities involving large trucks and buses through regulation, enforcement, and safety information.",
              },
              {
                name: "FTA",
                full: "Federal Transit Administration",
                members: 190,
                description:
                  "Provides financial and technical assistance to local public transit systems, including buses, subways, and light rail.",
              },
              {
                name: "PHMSA",
                full: "Pipeline and Hazardous Materials Safety Administration",
                members: 190,
                description:
                  "Protects people and the environment by advancing the safe transportation of energy and other hazardous materials.",
              },
              {
                name: "MARAD",
                full: "Maritime Administration",
                members: 168,
                description:
                  "Fosters, promotes, and develops the maritime industry of the United States to meet the nation's economic and security needs.",
              },
              {
                name: "OST",
                full: "Office of the Secretary of Transportation",
                members: 450,
                description:
                  "Oversees the policies and programs of the Department of Transportation and coordinates transportation initiatives.",
              },
            ].map((agency) => (
              <div
                key={agency.name}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={`/images/agencies/${agency.name.toLowerCase()}.png`}
                    alt={agency.full}
                    width={44}
                    height={44}
                    className="h-11 w-auto"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-union-gold">
                      {agency.name}
                    </h3>
                    <p className="text-white/60 text-xs">{agency.full}</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed text-sm">
                  {agency.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-2xl font-bold text-union-gold">{agency.members}</p>
                  <p className="text-white/50 text-xs">Bargaining Employees</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">Our Journey</h2>
            <div className="section-divider w-20 mx-auto mt-4" />
          </div>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-union-blue rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-union-blue/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-union-blue">{item.title}</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-union-blue">
            Ready to Get Involved?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you want to become a member, volunteer as a steward, or just
            learn more about your rights, we are here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/benefits"
              className="px-8 py-3.5 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
            >
              View Member Benefits
            </Link>
            <Link
              href="/where-do-my-dues-go"
              className="px-8 py-3.5 border-2 border-union-blue text-union-blue rounded-lg font-semibold hover:bg-union-blue hover:text-white transition-colors"
            >
              Where Do My Dues Go?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
