import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "President's Message",
  description:
    "A message from Jennifer Rodes, President of AFGE Local 3313, to all DOT employees and union members.",
};

export default function PresidentsMessagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-union-gold rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-union-gold font-medium mb-4">
              From the President&apos;s Desk
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              President&apos;s Message
            </h1>
            <p className="mt-4 text-xl text-white/80">
              Jennifer Rodes, President - AFGE Local 3313
            </p>
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px,1fr] gap-12">
            {/* Sidebar - President Info */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-union-blue to-union-blue-dark p-8 text-center">
                  <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-union-gold/50 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-white">JR</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">
                    Jennifer Rodes
                  </h3>
                  <p className="text-union-gold text-sm font-medium mt-1">
                    President
                  </p>
                </div>
                <div className="p-5 space-y-3">
                  <a
                    href="mailto:jennifer.rodes@dot.gov"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-union-blue transition-colors"
                  >
                    <Mail className="w-4 h-4 text-union-blue shrink-0" />
                    jennifer.rodes@dot.gov
                  </a>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">
                      Also Serving As
                    </p>
                    <p className="text-sm text-gray-600">
                      Secretary-Treasurer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="prose prose-lg max-w-none">
                <div className="bg-union-light rounded-2xl p-8 mb-10 relative">
                  <Quote className="w-10 h-10 text-union-gold/30 absolute top-6 left-6" />
                  <blockquote className="relative z-10 text-xl text-union-blue font-medium leading-relaxed italic pl-8">
                    Together, we are stronger. Your union is here to fight for
                    your rights, protect your livelihood, and ensure that every
                    DOT employee is treated with the dignity and respect they
                    deserve.
                  </blockquote>
                </div>

                <h2 className="text-2xl font-bold text-union-blue mb-4">
                  Dear Sisters, Brothers, and Siblings,
                </h2>

                <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Thank you for your continued dedication to public service
                    and to our union. As President of AFGE Local 3313, I am
                    honored to represent the hardworking employees of the
                    Department of Transportation.
                  </p>

                  <p>
                    These are challenging times for federal employees. We face
                    evolving workplace policies, return-to-office mandates, and
                    ongoing threats to our rights and benefits. Through it all,
                    your union remains steadfast in its commitment to protecting
                    what you have earned and fighting for what you deserve.
                  </p>

                  <h3 className="text-xl font-bold text-union-blue mt-8 mb-3">
                    What We Are Working On
                  </h3>

                  <p>
                    Our executive board and stewards are actively engaged on
                    multiple fronts to protect and advance your interests:
                  </p>

                  <ul className="space-y-3 list-none pl-0">
                    {[
                      "Negotiating and enforcing our collective bargaining agreements across all DOT agencies",
                      "Challenging unfair return-to-office policies and protecting your telework rights",
                      "Representing employees in disciplinary actions and ensuring due process",
                      "Advocating for fair pay, proper classifications, and locality pay adjustments",
                      "Fighting against any attempts to weaken federal employee protections",
                      "Building a stronger, more engaged membership base",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100"
                      >
                        <span className="w-2 h-2 bg-union-gold rounded-full mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-union-blue mt-8 mb-3">
                    Your Voice Matters
                  </h3>

                  <p>
                    I encourage every eligible employee to join our union and
                    participate actively. Attend our monthly meetings, stay
                    informed through our communications, and do not hesitate to
                    reach out to your steward when you need help.
                  </p>

                  <p>
                    Remember: you have rights in the workplace, and your union
                    is here to ensure those rights are respected. Whether it is
                    a Weingarten rights situation, a telework dispute, or a
                    disciplinary action, we have your back.
                  </p>

                  <h3 className="text-xl font-bold text-union-blue mt-8 mb-3">
                    Looking Forward
                  </h3>

                  <p>
                    I am committed to transparency, accessibility, and action.
                    My door is always open, and I welcome your ideas, concerns,
                    and feedback. Together, we will continue to build a stronger
                    Local 3313 that every member can be proud of.
                  </p>

                  <p>In Solidarity,</p>

                  <div className="mt-2">
                    <p className="text-union-blue font-bold text-xl">
                      Jennifer Rodes
                    </p>
                    <p className="text-gray-500">
                      President, AFGE Local 3313
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-union-blue">
            Connect With Your Union
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or concerns? Reach out to your union leadership or
            attend our next meeting.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/union-officials"
              className="px-8 py-3.5 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
            >
              View All Officials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
