"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "Membership",
    questions: [
      {
        q: "How do I join AFGE Local 3313?",
        a: "To join, complete an SF-1187 (Request for Payroll Deductions for Labor Organization Dues) form. You can get this form from your union steward or download it from our Resources page. Once completed, submit it to your servicing HR office.",
      },
      {
        q: "Who can be a member?",
        a: "Any bargaining unit employee of the Department of Transportation agencies represented by Local 3313 (NHTSA, FMCSA, FTA, PHMSA, OST) is eligible for membership.",
      },
      {
        q: "How much are union dues?",
        a: "AFGE dues are set by the national constitution and are a percentage of your base pay. The exact amount depends on your salary level. Dues are automatically deducted from your paycheck.",
      },
      {
        q: "Can I cancel my membership?",
        a: "Yes, you can revoke your dues authorization during the window period specified on your SF-1187. Contact your steward or the union office for details about the cancellation window.",
      },
    ],
  },
  {
    category: "Representation",
    questions: [
      {
        q: "What are Weingarten Rights?",
        a: 'Under the Weingarten decision, you have the right to union representation during any investigatory interview that you reasonably believe could lead to disciplinary action. If called into such a meeting, you can say: "If this discussion could in any way lead to my being disciplined or terminated, I respectfully request that my union representative be present. Until my representative arrives, I choose not to answer any questions."',
      },
      {
        q: "What is a grievance?",
        a: "A grievance is a formal complaint that your rights under the collective bargaining agreement, law, rule, or regulation have been violated. Grievances follow a specific process outlined in your CBA, typically starting with an informal resolution attempt.",
      },
      {
        q: "How do I file a grievance?",
        a: "Contact your union steward first. They will help you determine if you have a valid grievance and guide you through the process. Time limits apply, so do not delay in reaching out.",
      },
      {
        q: "Do I need to be a member to get representation?",
        a: "The union represents all bargaining unit employees in matters covered by the collective bargaining agreement, regardless of membership status. However, only dues-paying members can vote on union matters and receive the full range of AFGE member benefits.",
      },
    ],
  },
  {
    category: "Workplace Issues",
    questions: [
      {
        q: "What should I do if I receive a proposed disciplinary action?",
        a: "Contact your union steward immediately. You typically have a limited time to respond, and your steward can help you prepare your response and represent you throughout the process.",
      },
      {
        q: "Can management change my work schedule without negotiating?",
        a: "Under most collective bargaining agreements, management must negotiate changes to working conditions, including schedules, with the union. If your schedule is changed without proper negotiation, contact your steward.",
      },
      {
        q: "What if I have a telework dispute?",
        a: "Telework policies are negotiated in the collective bargaining agreement. If management is not following the agreed-upon telework policy, contact your steward to discuss your options.",
      },
      {
        q: "How do I report unsafe working conditions?",
        a: "Report safety concerns to your supervisor and your union steward. The union can help ensure management addresses safety issues. You also have the right to file an OSHA complaint.",
      },
    ],
  },
  {
    category: "Union Activities",
    questions: [
      {
        q: "When are union meetings held?",
        a: "General membership meetings are typically held on the first Wednesday of each month. Check our Events page for the current schedule and meeting details.",
      },
      {
        q: "How can I become a union steward?",
        a: "Union stewards are appointed by the local president. If you are interested in becoming a steward, express your interest to your current steward or union leadership. Training is provided.",
      },
      {
        q: "How do I stay informed about union activities?",
        a: "Visit this website regularly, attend monthly meetings, and make sure the union has your current contact information so you receive member communications.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-union-blue">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-union-blue shrink-0 mt-0.5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/faq.jpg"
          alt="FAQ"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Answers to common questions about your union
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-union-blue mb-2">
                {category.category}
              </h2>
              <div className="section-divider w-16 mt-2 mb-6" />
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                {category.questions.map((faq) => (
                  <FAQItem
                    key={faq.q}
                    question={faq.q}
                    answer={faq.a}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="mt-12 bg-union-light rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-union-blue mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Cannot find what you are looking for? Contact us or reach out to
              your union steward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
