import type { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle, Download, Phone, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Prohibited Personnel Practices",
  description:
    "Learn about prohibited personnel practices in federal employment. AFGE Local 3313 protects DOT employees from discrimination, retaliation, and unfair treatment.",
};

const practices = [
  {
    number: 1,
    title: "Discrimination",
    description:
      "Discriminating against an employee or applicant based on race, color, religion, sex, national origin, age, disability, marital status, or political affiliation.",
  },
  {
    number: 2,
    title: "Soliciting or Considering Improper Recommendations",
    description:
      "Soliciting or considering employment recommendations based on factors other than personal knowledge or records of job-related abilities or characteristics.",
  },
  {
    number: 3,
    title: "Coercing Political Activity",
    description:
      "Coercing the political activity of any person, or taking action against an employee as reprisal for refusal to engage in political activity.",
  },
  {
    number: 4,
    title: "Deceiving or Obstructing Applicants",
    description:
      "Deceiving or willfully obstructing anyone from competing for employment, or influencing withdrawal from competition to improve or injure another&apos;s prospects.",
  },
  {
    number: 5,
    title: "Influencing Withdrawal from Competition",
    description:
      "Influencing any person to withdraw from competition for any position for the purpose of improving or injuring the prospects of any other person for employment.",
  },
  {
    number: 6,
    title: "Granting Unauthorized Preferences",
    description:
      "Granting any preference or advantage not authorized by law, rule, or regulation to any employee or applicant for employment.",
  },
  {
    number: 7,
    title: "Nepotism",
    description:
      "Employing or advocating for the employment of a relative. This includes appointing, promoting, or advancing a relative in the agency where the official serves.",
  },
  {
    number: 8,
    title: "Whistleblower Retaliation",
    description:
      "Taking or threatening to take a personnel action against an employee for disclosing information that evidences a violation of law, gross mismanagement, waste of funds, abuse of authority, or danger to public health or safety.",
  },
  {
    number: 9,
    title: "Retaliation for Exercising Rights",
    description:
      "Taking or threatening to take a personnel action against an employee for exercising any appeal, complaint, or grievance right; testifying or assisting in any proceeding; or cooperating with an Inspector General.",
  },
  {
    number: 10,
    title: "Discrimination Based on Off-Duty Conduct",
    description:
      "Discriminating against an employee or applicant based on conduct that does not adversely affect job performance.",
  },
  {
    number: 11,
    title: "Violating Veterans' Preference",
    description:
      "Knowingly taking, recommending, or approving a personnel action that violates veterans' preference requirements.",
  },
  {
    number: 12,
    title: "Violating Merit System Principles",
    description:
      "Taking or failing to take a personnel action that violates any law, rule, or regulation implementing or directly concerning the merit system principles.",
  },
  {
    number: 13,
    title: "Implementing Nondisclosure Policies",
    description:
      "Implementing or enforcing any nondisclosure policy, form, or agreement that fails to include the required statement that such agreements are consistent with whistleblower protection statutes.",
  },
  {
    number: 14,
    title: "Accessing Medical Records",
    description:
      "Accessing the medical record of an employee or applicant as part of, or otherwise in furtherance of, any prohibited personnel practice.",
  },
];

export default function ProhibitedPracticesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-union-gold" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Prohibited Personnel Practices
            </h1>
          </div>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            Federal law prohibits certain personnel practices that undermine the
            merit system. Know your rights and protections.
          </p>
        </div>
      </section>

      {/* Download Banner */}
      <section className="bg-union-red/10 border-b border-union-red/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <FileText className="w-6 h-6 text-union-red shrink-0" />
              <p className="text-gray-700 text-sm">
                <strong>Download the complete reference guide</strong> — print and keep at your desk.
              </p>
            </div>
            <a
              href="/docs/Prohibited-Personnel-Practices.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shrink-0"
            >
              <Download className="w-4 h-4" />
              Download PDF (212 KB)
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-union-blue mb-4">
              What Are Prohibited Personnel Practices?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prohibited Personnel Practices (PPPs) are employment-related
              actions that violate merit system principles. They are defined in
              Title 5, United States Code, Section 2302. The U.S. Office of
              Special Counsel (OSC) investigates complaints of PPPs and can seek
              corrective and disciplinary action.
            </p>
            <p className="text-gray-700 leading-relaxed">
              AFGE Local 3313 is committed to ensuring that all DOT employees
              are treated fairly and that management adheres to merit system
              principles. If you believe you have been subjected to a prohibited
              practice, contact your union representative immediately.
            </p>
          </div>
        </div>
      </section>

      {/* The 14 PPPs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            The 14 Prohibited Personnel Practices
          </h2>
          <div className="section-divider w-20 mt-2 mb-10" />

          <div className="space-y-4">
            {practices.map((practice) => (
              <div
                key={practice.number}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-union-blue text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {practice.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            What To Do If You Experience a Prohibited Practice
          </h2>
          <div className="section-divider w-20 mt-2 mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-union-blue" />
              </div>
              <h3 className="text-lg font-bold text-union-blue mb-3">
                1. Contact Your Union Rep
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach out to your agency&apos;s union representative or email the
                union at{" "}
                <a
                  href="mailto:askafgelocal3313@outlook.com"
                  className="text-union-blue font-medium hover:underline"
                >
                  askafgelocal3313@outlook.com
                </a>
                . We can help assess the situation and advise on next steps.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-union-blue" />
              </div>
              <h3 className="text-lg font-bold text-union-blue mb-3">
                2. Document Everything
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keep detailed records of the prohibited practice including dates,
                times, witnesses, and any relevant communications. Written
                documentation strengthens your case.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-union-blue" />
              </div>
              <h3 className="text-lg font-bold text-union-blue mb-3">
                3. File a Complaint
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You may file a complaint with the{" "}
                <a
                  href="https://osc.gov/Pages/File-Complaint.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-union-blue font-medium hover:underline"
                >
                  Office of Special Counsel
                </a>
                , file a{" "}
                <Link
                  href="/grievance"
                  className="text-union-blue font-medium hover:underline"
                >
                  grievance
                </Link>
                , or pursue an EEO complaint if discrimination is involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remember Your Rights */}
      <section className="py-16 bg-union-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-union-gold mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Remember: You Have Rights
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            It is illegal for any federal supervisor or manager to retaliate
            against you for exercising your rights, filing a complaint, or
            cooperating with an investigation. Your union is here to protect you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-union-gold text-union-blue-dark font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Contact the Union
            </Link>
            <a
              href="/docs/Prohibited-Personnel-Practices.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Reference Guide
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
