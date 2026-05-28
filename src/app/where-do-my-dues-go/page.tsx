import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Scale,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Building2,
  Megaphone,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Where Do My Dues Go?",
  description:
    "Learn how your AFGE Local 3313 union dues are invested to protect your rights, provide representation, and deliver member benefits.",
};

const duesBreakdown = [
  {
    icon: Scale,
    title: "Legal Representation & Advocacy",
    percent: "~40%",
    color: "bg-union-blue",
    description:
      "Your dues fund professional legal representation for workplace disputes, grievance processing, arbitration costs, and advocacy before federal agencies. This includes Weingarten representation, Merit Systems Protection Board (MSPB) appeals, and unfair labor practice charges.",
    items: [
      "Grievance processing & arbitration",
      "MSPB appeals and legal counsel",
      "Weingarten representation",
      "Unfair labor practice charges",
      "EEO support and guidance",
    ],
  },
  {
    icon: Briefcase,
    title: "Collective Bargaining",
    percent: "~25%",
    color: "bg-union-red",
    description:
      "Negotiating and maintaining collective bargaining agreements (CBAs) across all DOT agencies is one of our most important functions. Your dues support the research, preparation, and negotiation process that secures fair pay, telework policies, and working conditions.",
    items: [
      "CBA negotiations across 6 agencies",
      "Mid-term bargaining on policy changes",
      "Impact & implementation bargaining",
      "Research and data analysis",
      "Member surveys and feedback",
    ],
  },
  {
    icon: Building2,
    title: "Union Operations",
    percent: "~20%",
    color: "bg-amber-600",
    description:
      "Keeping the local running efficiently requires administrative resources. This covers communication tools, meeting expenses, training materials, and the day-to-day operations that keep your union functioning effectively.",
    items: [
      "Member communications & newsletters",
      "Meeting facilities and logistics",
      "Website and technology tools",
      "Office supplies and administration",
      "Record keeping and compliance",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    percent: "~10%",
    color: "bg-green-600",
    description:
      "Investing in steward training and member education ensures your representatives are prepared to defend your rights. Your dues support conferences, workshops, and educational resources.",
    items: [
      "Steward training and certification",
      "Legislative and political education",
      "Know Your Rights workshops",
      "AFGE conferences and conventions",
      "New member orientation programs",
    ],
  },
  {
    icon: Megaphone,
    title: "AFGE National & Legislative Action",
    percent: "~5%",
    color: "bg-purple-600",
    description:
      "A portion of your dues supports AFGE National's efforts to advocate for federal employees on Capitol Hill, fight against government shutdowns, and protect your pay, retirement, and healthcare benefits at the national level.",
    items: [
      "Congressional lobbying for federal employees",
      "Fight against RIFs and furloughs",
      "Pay and benefits protection",
      "Federal workforce advocacy",
      "AFGE national resources and support",
    ],
  },
];

const memberBenefits = [
  {
    title: "Prescription Discounts",
    description: "Save up to 80% off retail prescription prices through AFGE partner programs.",
    icon: Heart,
  },
  {
    title: "Legal Services",
    description: "Free 30-minute legal consultation and discounted rates for personal legal matters.",
    icon: Scale,
  },
  {
    title: "Mortgage Programs",
    description: "Union-exclusive mortgage programs with closing cost savings.",
    icon: Building2,
  },
  {
    title: "Travel Discounts",
    description: "Discounted hotels, rental cars, and airline tickets through Union Plus.",
    icon: Briefcase,
  },
  {
    title: "Education Benefits",
    description: "Scholarships, free college programs, and tuition discounts for members and families.",
    icon: GraduationCap,
  },
  {
    title: "Financial Assistance",
    description: "Emergency hardship assistance and financial counseling during tough times.",
    icon: DollarSign,
  },
];

export default function DuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Where Do My Dues Go?
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              A question we hear often. Your union dues are an investment in your
              workplace rights, fair treatment, and professional protections.
              Here&apos;s exactly how your money works for you.
            </p>
          </div>
        </div>
      </section>

      {/* How Dues Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-union-blue">
              Your Dues at Work
            </h2>
            <div className="section-divider w-20 mx-auto mt-4" />
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              AFGE dues are set by the AFGE National Constitution. For most
              members, biweekly dues are calculated based on your pay grade.
              Every dollar is invested back into protecting and advancing your
              rights as a federal employee.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="bg-union-light rounded-xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-union-blue mx-auto mb-3" />
              <h3 className="text-lg font-bold text-union-blue">Affordable</h3>
              <p className="text-gray-600 text-sm mt-1">
                Less than a dollar a day for full workplace protection and
                representation
              </p>
            </div>
            <div className="bg-union-light rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-union-blue mx-auto mb-3" />
              <h3 className="text-lg font-bold text-union-blue">Protected</h3>
              <p className="text-gray-600 text-sm mt-1">
                Every member gets access to legal representation, grievance
                processing, and workplace advocacy
              </p>
            </div>
            <div className="bg-union-light rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-union-blue mx-auto mb-3" />
              <h3 className="text-lg font-bold text-union-blue">Collective Power</h3>
              <p className="text-gray-600 text-sm mt-1">
                1,475+ employees pooling resources for stronger negotiating
                power and better outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">
              How Your Dues Are Invested
            </h2>
            <div className="section-divider w-20 mx-auto mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Here&apos;s a breakdown of how your union dues are allocated to
              serve you and your fellow members.
            </p>
          </div>

          {/* Visual Bar */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="flex rounded-full overflow-hidden h-8 shadow-inner">
              <div className="bg-union-blue h-full" style={{ width: "40%" }} title="Legal & Advocacy ~40%" />
              <div className="bg-union-red h-full" style={{ width: "25%" }} title="Collective Bargaining ~25%" />
              <div className="bg-amber-600 h-full" style={{ width: "20%" }} title="Operations ~20%" />
              <div className="bg-green-600 h-full" style={{ width: "10%" }} title="Training ~10%" />
              <div className="bg-purple-600 h-full" style={{ width: "5%" }} title="National & Legislative ~5%" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {duesBreakdown.map((item) => (
                <div key={item.title} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-gray-600">
                    {item.title.split(" & ")[0]} ({item.percent})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Cards */}
          <div className="space-y-6">
            {duesBreakdown.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className={`${item.color} p-6 lg:p-8 lg:w-64 flex flex-col items-center justify-center text-white shrink-0`}>
                    <item.icon className="w-10 h-10 mb-2" />
                    <p className="text-3xl font-bold">{item.percent}</p>
                    <p className="text-sm text-white/80 text-center mt-1">of your dues</p>
                  </div>
                  <div className="p-6 lg:p-8 flex-1">
                    <h3 className="text-xl font-bold text-union-blue mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {item.items.map((li) => (
                        <li key={li} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {li}
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

      {/* Member Benefits You Receive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-union-blue">
              Member Benefits Included with Your Dues
            </h2>
            <div className="section-divider w-20 mx-auto mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Beyond workplace representation, your AFGE membership unlocks
              exclusive benefits and discounts through Union Plus and AFGE
              partner programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-union-light rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-8 h-8 text-union-blue mb-3" />
                <h3 className="font-bold text-union-blue mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/benefits"
              className="inline-flex items-center gap-2 text-union-blue font-semibold hover:text-union-red transition-colors"
            >
              View All Member Benefits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="py-16 bg-union-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">The Bottom Line</h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Without a union, you have no voice in negotiations over pay,
            benefits, telework, or working conditions. Without a union, you face
            disciplinary actions alone. Your dues fund the collective power that
            protects every bargaining unit employee at DOT — whether they are a
            dues-paying member or not. When you join, you strengthen that power
            for everyone.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/how-to-join"
              className="px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Join AFGE Local 3313
            </Link>
            <Link
              href="/resources"
              className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* E-Dues CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-union-blue to-union-blue-dark rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Prefer E-Dues? It&apos;s Easy!
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Skip the paper forms. Enroll in e-dues online and have your
              membership dues conveniently deducted automatically.
            </p>
            <a
              href="https://join.afge.org/L3313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Enroll in E-Dues <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
