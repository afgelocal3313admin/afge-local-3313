import type { Metadata } from "next";
import Link from "next/link";
import { Download, Scale, ExternalLink, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Collective Bargaining Agreements",
  description:
    "Download collective bargaining agreements (CBAs) for all DOT agencies represented by AFGE Local 3313 — NHTSA, FMCSA, FTA, OST, PHMSA.",
};

const cbas = [
  {
    agency: "NHTSA",
    agencyFull: "National Highway Traffic Safety Administration",
    title: "AFGE-NHTSA Collective Bargaining Agreement",
    description:
      "Current agreement between AFGE and the National Highway Traffic Safety Administration covering approximately 270 bargaining unit employees.",
    href: "/docs/cbas/NHTSA-CBA.pdf",
    size: "2.9 MB",
    color: "bg-blue-600",
  },
  {
    agency: "FMCSA",
    agencyFull: "Federal Motor Carrier Safety Administration",
    title: "FMCSA Master Labor Agreement (2025)",
    description:
      "Updated Master Labor Agreement for Federal Motor Carrier Safety Administration employees, effective January 2025.",
    href: "/docs/cbas/FMCSA-MLA-2025.pdf",
    size: "1.0 MB",
    color: "bg-emerald-600",
  },
  {
    agency: "FTA",
    agencyFull: "Federal Transit Administration",
    title: "FTA Collective Bargaining Agreement (2021)",
    description:
      "Agreement between AFGE and the Federal Transit Administration covering approximately 190 bargaining unit employees.",
    href: "/docs/cbas/FTA-CBA-2021.pdf",
    size: "1.2 MB",
    color: "bg-purple-600",
  },
  {
    agency: "OST",
    agencyFull: "Office of the Secretary of Transportation",
    title: "OST-AFGE Master Agreement",
    description:
      "Agreement between AFGE and the Office of the Secretary of Transportation covering approximately 450 bargaining unit employees.",
    href: "/docs/cbas/OST-Master-Agreement.pdf",
    size: "1.1 MB",
    color: "bg-amber-600",
  },
  {
    agency: "PHMSA",
    agencyFull: "Pipeline and Hazardous Materials Safety Administration",
    title: "PHMSA 2020 Collective Bargaining Agreement",
    description:
      "Agreement covering PHMSA bargaining unit employees, approximately 190 members.",
    href: "/docs/cbas/PHMSA-CBA-2020.pdf",
    size: "796 KB",
    color: "bg-red-600",
  },
];

const educationalLinks = [
  {
    name: "What is a CBA?",
    url: "https://www.law.cornell.edu/wex/collective_bargaining",
    description: "Cornell Law School definition and legal overview",
  },
  {
    name: "Department of Labor — CBAs",
    url: "https://www.dol.gov/general/topic/labor-relations/collectivebargaining",
    description: "DOL guidance on collective bargaining",
  },
  {
    name: "Office of Labor-Management Standards",
    url: "https://www.dol.gov/agencies/olms",
    description: "Compliance assistance and labor-management relations",
  },
];

export default function CollectiveBargainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-10 h-10 text-union-gold" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Collective Bargaining Agreements
            </h1>
          </div>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            Your CBA is your contract with management. It defines your rights,
            working conditions, pay, leave, and workplace protections.
          </p>
        </div>
      </section>

      {/* What is a CBA */}
      <section className="py-16 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-union-blue mb-4">
              What is a Collective Bargaining Agreement?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Collective Bargaining Agreement (CBA) is a legally binding
              contract negotiated between AFGE Local 3313 and agency management.
              It covers topics including working conditions, hours, leave
              policies, performance appraisals, grievance procedures, travel
              policies, and employee protections.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every bargaining unit employee is covered by their agency&apos;s CBA,
              regardless of union membership. However, only dues-paying members
              receive full representation and can participate in negotiating
              future agreements.
            </p>
          </div>
        </div>
      </section>

      {/* CBA Downloads */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Download Your Agency&apos;s CBA
          </h2>
          <div className="section-divider w-20 mt-2 mb-10" />

          <div className="space-y-6">
            {cbas.map((cba) => (
              <div
                key={cba.agency}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className={`${cba.color} lg:w-40 flex items-center justify-center py-4 lg:py-0`}>
                    <span className="text-white font-bold text-2xl tracking-wide">
                      {cba.agency}
                    </span>
                  </div>
                  <div className="flex-1 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {cba.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {cba.agencyFull}
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        {cba.description}
                      </p>
                    </div>
                    <a
                      href={cba.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors shrink-0"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                      <span className="text-white/60 text-xs ml-1">
                        ({cba.size})
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MARAD note */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-amber-800">
                  MARAD — Maritime Administration
                </h4>
                <p className="text-amber-700 text-sm mt-1">
                  The MARAD collective bargaining agreement is currently being
                  negotiated. Contact your MARAD representatives for the latest
                  updates. See the{" "}
                  <Link
                    href="/union-officials"
                    className="underline font-medium"
                  >
                    Union Officials
                  </Link>{" "}
                  page for contact information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-16 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-union-blue mb-4">
                Need Help Understanding Your CBA?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you believe management has violated your CBA, or if you have
                questions about any provision, don&apos;t hesitate to reach out:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-union-blue text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <span className="text-gray-700">Contact your agency&apos;s union representative</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-union-blue text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <span className="text-gray-700">Email the union at <a href="mailto:askafgelocal3313@outlook.com" className="text-union-blue font-medium hover:underline">askafgelocal3313@outlook.com</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-union-blue text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                  <span className="text-gray-700">
                    Learn about the{" "}
                    <Link href="/grievance" className="text-union-blue font-medium hover:underline">
                      grievance process
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-union-blue mb-4">
                Learn More About CBAs
              </h2>
              <div className="space-y-3">
                {educationalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all group"
                  >
                    <ExternalLink className="w-4 h-4 text-union-blue mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-union-blue group-hover:text-union-red transition-colors text-sm">
                        {link.name}
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
