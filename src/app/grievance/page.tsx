import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  MessageCircle,
  FileText,
  Scale,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Grievance Process",
  description:
    "Learn about the grievance process at AFGE Local 3313. Know your rights and how to address workplace issues through proper channels.",
};

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Contact Your Steward",
    description:
      "The first step is always to contact your union steward. They will listen to your concern, review the facts, and help determine the best course of action. Many issues can be resolved informally at this stage.",
    tips: [
      "Act quickly - most grievances have strict time limits",
      "Document everything - dates, times, witnesses, communications",
      "Do not sign anything without consulting your steward first",
    ],
  },
  {
    icon: AlertCircle,
    number: "02",
    title: "Informal Resolution",
    description:
      "Your steward will attempt to resolve the issue informally with your supervisor or management. This is often the quickest way to address a workplace problem.",
    tips: [
      "Your steward will represent you in discussions with management",
      "Many issues are successfully resolved at this stage",
      "If informal resolution fails, you can proceed to a formal grievance",
    ],
  },
  {
    icon: FileText,
    number: "03",
    title: "Formal Grievance",
    description:
      "If the issue cannot be resolved informally, your steward will help you file a formal grievance. This puts your complaint in writing and triggers the contractual grievance procedure.",
    tips: [
      "Your CBA outlines specific steps and time limits",
      "Grievances may go through multiple steps of management review",
      "Your steward will represent you at each step",
    ],
  },
  {
    icon: Scale,
    number: "04",
    title: "Arbitration",
    description:
      "If the grievance is not resolved through the contractual process, the union may elect to take the matter to binding arbitration, where a neutral third party will make a decision.",
    tips: [
      "Arbitration decisions are typically final and binding",
      "The union evaluates the merits of each case before proceeding",
      "An experienced arbitrator hears both sides and issues a decision",
    ],
  },
];

export default function GrievancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/grievance.jpg"
          alt="Grievance Process"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Grievance Process
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              If your rights have been violated, your union is here to help.
              Learn about the grievance process and how we can resolve your
              workplace issues.
            </p>
          </div>
        </div>
      </section>

      {/* Weingarten Rights */}
      <section className="py-12 bg-union-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Shield className="w-12 h-12 text-white shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Know Your Weingarten Rights
              </h2>
              <p className="text-white/90">
                If you are called into a meeting that you reasonably believe
                could lead to discipline, you have the right to request union
                representation BEFORE answering any questions. Exercise this
                right — contact your steward immediately.
              </p>
            </div>
            <Link
              href="/resources"
              className="shrink-0 px-6 py-2.5 bg-white text-union-red rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Rights Card
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            The Grievance Process
          </h2>
          <div className="section-divider w-20 mt-2 mb-12" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-16 h-16 bg-union-blue rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-union-blue/30">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-union-blue mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.tips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          {tip}
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

      {/* Important Reminders */}
      <section className="py-20 bg-union-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Important Reminders
          </h2>
          <div className="section-divider w-20 mt-2 mb-12" />

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "Time Limits Matter",
                description:
                  "Grievances must be filed within specific time frames outlined in your CBA. Do not delay — contact your steward as soon as an issue arises.",
              },
              {
                icon: FileText,
                title: "Document Everything",
                description:
                  "Keep records of dates, times, conversations, witnesses, and any relevant documents. Good documentation strengthens your case.",
              },
              {
                icon: Shield,
                title: "Protection from Retaliation",
                description:
                  "Federal law protects you from retaliation for exercising your union rights, including filing grievances or requesting representation.",
              },
              {
                icon: MessageCircle,
                title: "Communication is Key",
                description:
                  "Stay in touch with your steward throughout the process. Keep them updated on any new developments or communications from management.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <item.icon className="w-8 h-8 text-union-blue mb-3" />
                <h3 className="font-bold text-union-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-union-blue">
            Need Help With a Workplace Issue?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Do not wait. Contact your union steward or reach out to us. We are
            here to protect your rights.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Contact Us Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
