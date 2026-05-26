import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Scale,
  Briefcase,
  Heart,
  GraduationCap,
  DollarSign,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Member Benefits",
  description:
    "Discover what AFGE Local 3313 does for you. From collective bargaining to workplace protections, learn about the benefits of union membership.",
};

const benefits = [
  {
    icon: Scale,
    title: "Collective Bargaining",
    description:
      "We negotiate your contract, ensuring fair pay scales, step increases, and locality pay adjustments. Your collective bargaining agreement is your workplace bill of rights.",
    highlights: [
      "Negotiated pay and benefits",
      "Working conditions protections",
      "Telework and flexible schedule policies",
      "Leave policies and protections",
    ],
  },
  {
    icon: Shield,
    title: "Workplace Representation",
    description:
      "When you face workplace issues, your union is there. Our stewards are trained to represent you in meetings, investigations, and disciplinary proceedings.",
    highlights: [
      "Weingarten Rights representation",
      "Disciplinary action defense",
      "EEO complaint assistance",
      "Unfair labor practice filing",
    ],
  },
  {
    icon: Briefcase,
    title: "Grievance Processing",
    description:
      "If your rights under the contract are violated, we help you file and pursue grievances through proper channels, all the way to arbitration if necessary.",
    highlights: [
      "Informal resolution support",
      "Formal grievance filing",
      "Arbitration representation",
      "FLRA complaint assistance",
    ],
  },
  {
    icon: Heart,
    title: "Health & Safety",
    description:
      "We advocate for safe working conditions and ensure the agency complies with OSHA standards and safety regulations.",
    highlights: [
      "Workplace safety advocacy",
      "Ergonomic assessments",
      "Indoor air quality concerns",
      "COVID-19 safety protocols",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "We fight for your access to training and career development opportunities, helping you grow professionally.",
    highlights: [
      "Training program advocacy",
      "Career development support",
      "Upward mobility programs",
      "Tuition assistance negotiations",
    ],
  },
  {
    icon: DollarSign,
    title: "Pay & Compensation",
    description:
      "We work to ensure fair compensation for all employees, including proper classification, overtime pay, and premium pay entitlements.",
    highlights: [
      "Fair pay advocacy",
      "Classification reviews",
      "Overtime protections",
      "Premium pay entitlements",
    ],
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description:
      "We negotiate telework agreements, flexible schedules, and leave policies that help you balance your professional and personal life.",
    highlights: [
      "Telework agreements",
      "Compressed work schedules",
      "Flextime arrangements",
      "Family & medical leave protections",
    ],
  },
  {
    icon: Users,
    title: "Community & Support",
    description:
      "Beyond workplace issues, we provide a community of fellow employees who support each other and work toward common goals.",
    highlights: [
      "Member networking",
      "Union meetings & events",
      "Legislative advocacy",
      "AFGE national benefits",
    ],
  },
];

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/benefits.jpg"
          alt="Member Benefits"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              What Local 3313 Does For You
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Your union works every day to protect your rights, improve your
              working conditions, and ensure you are treated fairly.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <benefit.icon className="w-7 h-7 text-union-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-union-blue mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Member vs Member */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">
              Why Join the Union?
            </h2>
            <div className="section-divider w-20 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-500 mb-6">
                Without Union Membership
              </h3>
              <ul className="space-y-3">
                {[
                  "No voice in contract negotiations",
                  "No dedicated representation",
                  "No access to steward support",
                  "No vote on union matters",
                  "No AFGE member benefits",
                  "No legal representation fund",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-500">
                    <span className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-union-blue p-8 rounded-xl shadow-lg border-2 border-union-gold relative">
              <div className="absolute -top-3 left-6 px-4 py-1 bg-union-gold text-union-blue-dark text-sm font-bold rounded-full">
                Recommended
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                With Union Membership
              </h3>
              <ul className="space-y-3">
                {[
                  "Full voice in your workplace",
                  "Expert steward representation",
                  "Grievance & arbitration support",
                  "Vote on contracts & elections",
                  "AFGE member discount programs",
                  "Legal representation fund access",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-union-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-union-blue">
            Ready to Join?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Contact us to learn more about membership or get help with a
            workplace issue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Join AFGE Local 3313 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/grievance"
              className="px-8 py-3.5 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
            >
              Need Help Now?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
