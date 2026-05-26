import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Shield, Heart, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Join",
  description:
    "Join AFGE Local 3313 and stand with your fellow DOT employees. Learn about membership benefits, dues, and the simple steps to become a member.",
};

const steps = [
  {
    step: 1,
    title: "Determine Your Eligibility",
    description:
      "All non-supervisory, non-management employees of the Department of Transportation in our bargaining units are eligible to join AFGE Local 3313. This includes employees at NHTSA, FMCSA, FTA, PHMSA, MARAD, and OST.",
  },
  {
    step: 2,
    title: "Complete the Membership Form",
    description:
      "Fill out the SF-1187 (Request for Payroll Deductions for Labor Organization Dues) form. You can get this form from your union steward or download it from our Resources page.",
  },
  {
    step: 3,
    title: "Submit Your Form",
    description:
      "Submit your completed SF-1187 to your union steward or any Local 3313 officer. You can also email it to your agency vice president. Dues will be automatically deducted from your paycheck.",
  },
  {
    step: 4,
    title: "Get Involved",
    description:
      "Attend monthly meetings, volunteer as a steward, and participate in union activities. The more members who get involved, the stronger our collective voice becomes.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Full Representation",
    description: "Union members receive priority representation in grievances, disciplinary actions, and workplace disputes.",
  },
  {
    icon: Users,
    title: "Voting Rights",
    description: "Only members can vote on union matters, elect officers, ratify contracts, and shape the direction of Local 3313.",
  },
  {
    icon: Heart,
    title: "AFGE Member Benefits",
    description: "Access exclusive discounts on insurance, travel, education, financial services, and more through AFGE National.",
  },
  {
    icon: DollarSign,
    title: "Affordable Dues",
    description: "Union dues are a small investment in your career protection. Dues are tax-deductible and automatically deducted from your pay.",
  },
];

export default function HowToJoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/join.jpg"
          alt="Join AFGE Local 3313"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              How to Join Local 3313
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Joining your union is one of the most important steps you can take
              to protect your career, your rights, and your fellow employees.
            </p>
            <a
              href="https://join.afge.org/L3313"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Join Online Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
              Why Join Local 3313?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The mission of Local 3313 is to facilitate and improve employee
              performance and productivity while ensuring that government
              workers are treated fairly, equitably, and with dignity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-union-gold/30 transition-all group"
              >
                <div className="w-14 h-14 bg-union-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-union-blue transition-colors">
                  <benefit.icon className="w-7 h-7 text-union-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-union-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-union-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-union-blue">
              Join in 4 Simple Steps
            </h2>
          </div>
          <div className="space-y-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-union-blue rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {item.step}
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

      {/* Member vs Non-Member */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue text-center mb-10">
            Member vs. Non-Member
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-union-blue text-white font-semibold">
              <div className="p-4">Benefit</div>
              <div className="p-4 text-center">Member</div>
              <div className="p-4 text-center">Non-Member</div>
            </div>
            {[
              ["Collective Bargaining Agreement protections", true, true],
              ["Grievance representation", true, true],
              ["Weingarten rights representation", true, true],
              ["Vote on union matters & elections", true, false],
              ["AFGE National member benefits & discounts", true, false],
              ["Priority steward assistance", true, false],
              ["Voice in contract negotiations", true, false],
              ["Union Plus benefits (insurance, travel, etc.)", true, false],
              ["Access to AFGE legal representation program", true, false],
            ].map(([benefit, member, nonMember]) => (
              <div
                key={benefit as string}
                className="grid grid-cols-3 border-t border-gray-100"
              >
                <div className="p-4 text-sm text-gray-700">{benefit as string}</div>
                <div className="p-4 text-center">
                  {member ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <span className="text-gray-300">&mdash;</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {nonMember ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <span className="text-gray-300">&mdash;</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Join?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Join online through AFGE National, download the SF-1187 form, or
            contact your union steward for assistance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://join.afge.org/L3313"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Join Online (E-Dues)
            </a>
            <Link
              href="/resources"
              className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Download SF-1187 Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
