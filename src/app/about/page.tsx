import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AFGE Local 3313, representing Department of Transportation employees across NHTSA, FMCSA, FTA, PHMSA, and OST.",
};

const values = [
  {
    icon: Users,
    title: "Solidarity",
    description:
      "We stand together as one voice, supporting each other through workplace challenges and advocating for collective improvements.",
  },
  {
    icon: Target,
    title: "Advocacy",
    description:
      "We actively work to improve working conditions, negotiate fair contracts, and protect the rights of every member.",
  },
  {
    icon: Heart,
    title: "Service",
    description:
      "We serve our members with dedication, providing representation, guidance, and support when they need it most.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We operate with transparency and accountability, ensuring that our actions always reflect the best interests of our members.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About AFGE Local 3313
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              We are the union representing employees of the U.S. Department of
              Transportation, fighting for fair wages, safe workplaces, and
              dignity on the job.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-union-blue">
                Who We Are
              </h2>
              <div className="section-divider w-20 mt-4" />
              <div className="mt-8 space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  AFGE Local 3313 is a local chapter of the American Federation
                  of Government Employees (AFGE), the largest federal employee
                  union representing over 750,000 federal and D.C. government
                  workers nationwide.
                </p>
                <p>
                  Our local represents bargaining unit employees across multiple
                  agencies within the U.S. Department of Transportation,
                  including NHTSA, FMCSA, FTA, PHMSA, and the Office of the
                  Secretary.
                </p>
                <p>
                  We negotiate collective bargaining agreements, represent
                  employees in workplace disputes, and advocate for policies that
                  protect the rights and well-being of federal workers.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/banners/union-officials.jpg"
                alt="AFGE Local 3313 Leadership"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
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
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">Our Values</h2>
            <div className="section-divider w-20 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-union-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-union-blue" />
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
                description:
                  "Saves lives, prevents injuries, and reduces economic costs due to road traffic crashes through education, research, and enforcement.",
              },
              {
                name: "FMCSA",
                full: "Federal Motor Carrier Safety Administration",
                description:
                  "Reduces crashes, injuries, and fatalities involving large trucks and buses through regulation, enforcement, and safety information.",
              },
              {
                name: "FTA",
                full: "Federal Transit Administration",
                description:
                  "Provides financial and technical assistance to local public transit systems, including buses, subways, and light rail.",
              },
              {
                name: "PHMSA",
                full: "Pipeline and Hazardous Materials Safety Administration",
                description:
                  "Protects people and the environment by advancing the safe transportation of energy and other hazardous materials.",
              },
              {
                name: "OST",
                full: "Office of the Secretary of Transportation",
                description:
                  "Oversees the policies and programs of the Department of Transportation and coordinates transportation initiatives.",
              },
            ].map((agency) => (
              <div
                key={agency.name}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8"
              >
                <Image
                  src={`/images/agencies/${agency.name.toLowerCase()}.png`}
                  alt={agency.full}
                  width={48}
                  height={48}
                  className="h-12 w-auto mb-4"
                />
                <h3 className="text-xl font-bold text-union-gold mb-1">
                  {agency.name}
                </h3>
                <p className="text-white/60 text-sm mb-3">{agency.full}</p>
                <p className="text-white/80 leading-relaxed">
                  {agency.description}
                </p>
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
          </div>
        </div>
      </section>
    </>
  );
}
