import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Scale,
  Shield,
  Gavel,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Documents",
  description:
    "Access collective bargaining agreements, bylaws, Weingarten rights, SF-1187 dues form, and other resources for AFGE Local 3313 members.",
};

const documents = [
  {
    icon: BookOpen,
    title: "AFGE Local 3313 Bylaws",
    description:
      "Constitution and bylaws governing AFGE Local 3313 operations, elections, meetings, and member rights.",
    href: "/docs/AFGE-Bylaws.pdf",
    action: "Download Bylaws",
    size: "7.6 MB",
  },
  {
    icon: Shield,
    title: "Weingarten Rights Card",
    description:
      "Know your right to union representation during investigatory interviews. Print and keep this card with you at all times.",
    href: "/docs/WEINGARTEN_RIGHTS.pdf",
    action: "Download Card",
    size: "92 KB",
  },
  {
    icon: FileText,
    title: "SF-1187 — Agency Dues Deduction Form",
    description:
      "Standard Form 1187 for authorizing payroll deduction of union dues. This is a fillable PDF you can complete electronically.",
    href: "/docs/SF-1187-Dues-Deduction.pdf",
    action: "Download Form",
    size: "176 KB",
  },
  {
    icon: Gavel,
    title: "Prohibited Personnel Practices",
    description:
      "Reference guide to personnel practices prohibited by federal law, including discrimination, retaliation, and coercion.",
    href: "/docs/Prohibited-Personnel-Practices.pdf",
    action: "Download Guide",
    size: "212 KB",
  },
];

const cbas = [
  {
    agency: "NHTSA",
    agencyFull: "National Highway Traffic Safety Administration",
    title: "AFGE-NHTSA Collective Bargaining Agreement",
    href: "/docs/cbas/NHTSA-CBA.pdf",
    size: "2.9 MB",
  },
  {
    agency: "FMCSA",
    agencyFull: "Federal Motor Carrier Safety Administration",
    title: "FMCSA Master Labor Agreement (2025)",
    href: "/docs/cbas/FMCSA-MLA-2025.pdf",
    size: "1.0 MB",
  },
  {
    agency: "FTA",
    agencyFull: "Federal Transit Administration",
    title: "FTA Collective Bargaining Agreement (2021)",
    href: "/docs/cbas/FTA-CBA-2021.pdf",
    size: "1.2 MB",
  },
  {
    agency: "OST",
    agencyFull: "Office of the Secretary of Transportation",
    title: "OST-AFGE Master Agreement",
    href: "/docs/cbas/OST-Master-Agreement.pdf",
    size: "1.1 MB",
  },
  {
    agency: "PHMSA",
    agencyFull: "Pipeline and Hazardous Materials Safety Administration",
    title: "PHMSA 2020 Collective Bargaining Agreement",
    href: "/docs/cbas/PHMSA-CBA-2020.pdf",
    size: "796 KB",
  },
];

const externalLinks = [
  {
    name: "AFGE National",
    url: "https://www.afge.org",
    description: "American Federation of Government Employees national website",
  },
  {
    name: "AFGE District 14",
    url: "https://www.afge.org/districts/district-14",
    description: "AFGE District 14 — Mid-Atlantic region",
  },
  {
    name: "Civil Service Strong",
    url: "https://www.afge.org/article/afge-allies-launch-civil-service-strong-to-help-federal-workers-understand-exercise-their-rights/",
    description: "Helping federal workers understand and exercise their rights",
  },
  {
    name: "E-Dues Enrollment",
    url: "https://join.afge.org/L3313",
    description: "Set up electronic dues payment for Local 3313",
  },
  {
    name: "OPM.gov",
    url: "https://www.opm.gov",
    description: "Office of Personnel Management — federal employee information",
  },
  {
    name: "USAJobs",
    url: "https://www.usajobs.gov",
    description: "Federal government job listings and career resources",
  },
  {
    name: "EEOC",
    url: "https://www.eeoc.gov",
    description: "Equal Employment Opportunity Commission",
  },
  {
    name: "FLRA",
    url: "https://www.flra.gov",
    description: "Federal Labor Relations Authority",
  },
  {
    name: "MSPB",
    url: "https://www.mspb.gov",
    description: "Merit Systems Protection Board",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Resources & Documents
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            Download your collective bargaining agreements, bylaws, forms, and
            other important union documents
          </p>
        </div>
      </section>

      {/* Key Documents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-union-blue" />
            <h2 className="text-3xl font-bold text-union-blue">
              Key Documents & Forms
            </h2>
          </div>
          <div className="section-divider w-20 mt-2 mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <doc.icon className="w-6 h-6 text-union-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-union-blue">
                      {doc.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">PDF &middot; {doc.size}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {doc.description}
                </p>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-union-blue text-white rounded-lg font-medium hover:bg-union-blue-dark transition-colors self-start"
                >
                  <Download className="w-4 h-4" />
                  {doc.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBAs */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-8 h-8 text-union-blue" />
            <h2 className="text-3xl font-bold text-union-blue">
              Collective Bargaining Agreements
            </h2>
          </div>
          <div className="section-divider w-20 mt-2 mb-4" />
          <p className="text-gray-600 mb-10 max-w-3xl">
            Your CBA is your contract with management — it outlines your rights,
            working conditions, pay, leave, and workplace protections. Contact
            your steward if you need help understanding any provision.
          </p>

          <div className="space-y-4">
            {cbas.map((cba) => (
              <a
                key={cba.agency}
                href={cba.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-union-blue/20 transition-all flex flex-col sm:flex-row sm:items-center gap-4 group block"
              >
                <div className="w-14 h-14 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-union-blue font-bold text-sm">{cba.agency}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-union-blue group-hover:text-union-red transition-colors">
                    {cba.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {cba.agencyFull}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-gray-400 text-xs">{cba.size}</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-union-blue text-white rounded-lg font-medium group-hover:bg-union-blue-dark transition-colors text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-5 bg-white/80 rounded-xl border border-gray-200">
            <p className="text-gray-600 text-sm">
              <strong className="text-union-blue">Note:</strong> MARAD (Maritime Administration)
              employees — your CBA is currently being negotiated. Contact your
              representative for the latest updates. See all agency representatives on the{" "}
              <Link href="/union-officials" className="text-union-blue hover:underline font-medium">
                Union Officials
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Related Pages
          </h2>
          <div className="section-divider w-20 mt-2 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/grievance"
              className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-union-blue/20 transition-all group"
            >
              <Gavel className="w-8 h-8 text-union-blue mb-3" />
              <h3 className="font-bold text-union-blue group-hover:text-union-red transition-colors">
                File a Grievance
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Step-by-step process
              </p>
            </Link>
            <Link
              href="/prohibited-practices"
              className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-union-blue/20 transition-all group"
            >
              <Shield className="w-8 h-8 text-union-blue mb-3" />
              <h3 className="font-bold text-union-blue group-hover:text-union-red transition-colors">
                Prohibited Practices
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Know what&apos;s not allowed
              </p>
            </Link>
            <Link
              href="/collective-bargaining-agreements"
              className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-union-blue/20 transition-all group"
            >
              <Scale className="w-8 h-8 text-union-blue mb-3" />
              <h3 className="font-bold text-union-blue group-hover:text-union-red transition-colors">
                All CBAs
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Bargaining agreements by agency
              </p>
            </Link>
            <Link
              href="/faq"
              className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-union-blue/20 transition-all group"
            >
              <BookOpen className="w-8 h-8 text-union-blue mb-3" />
              <h3 className="font-bold text-union-blue group-hover:text-union-red transition-colors">
                FAQ
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Common questions answered
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Useful Links
          </h2>
          <div className="section-divider w-20 mt-2 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-union-blue/20 transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-union-blue mt-0.5 shrink-0 group-hover:text-union-red" />
                <div>
                  <h3 className="font-bold text-union-blue group-hover:text-union-red transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
