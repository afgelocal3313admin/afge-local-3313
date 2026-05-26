import type { Metadata } from "next";
import Image from "next/image";
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Scale,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Documents",
  description:
    "Access collective bargaining agreements, Weingarten rights cards, newsletters, and other resources for AFGE Local 3313 members.",
};

const cbas = [
  {
    agency: "NHTSA",
    title: "AFGE-NHTSA Collective Bargaining Agreement",
    description: "Current agreement between AFGE and the National Highway Traffic Safety Administration.",
  },
  {
    agency: "FMCSA",
    title: "FMCSA Master Labor Agreement (2025)",
    description: "Updated Master Labor Agreement for Federal Motor Carrier Safety Administration employees.",
  },
  {
    agency: "FTA",
    title: "FTA Collective Bargaining Agreement (2021)",
    description: "Agreement between AFGE and the Federal Transit Administration.",
  },
  {
    agency: "PHMSA",
    title: "PHMSA 2020 Collective Bargaining Agreement",
    description: "Agreement covering PHMSA bargaining unit employees.",
  },
  {
    agency: "OST",
    title: "OST-AFGE Master Agreement",
    description: "Agreement between AFGE and the Office of the Secretary of Transportation.",
  },
];

const resources = [
  {
    icon: Shield,
    title: "Weingarten Rights Card",
    description:
      "Know your right to union representation during investigatory interviews. Print and keep this card with you.",
    action: "Download Card",
  },
  {
    icon: BookOpen,
    title: "New Member Orientation Guide",
    description:
      "Everything new members need to know about AFGE Local 3313, your rights, and your benefits.",
    action: "View Guide",
  },
  {
    icon: FileText,
    title: "SF-1187 (Union Dues Form)",
    description:
      "Standard Form 1187 for authorizing payroll deduction of union dues. Fillable PDF.",
    action: "Download Form",
  },
];

const externalLinks = [
  {
    name: "AFGE National",
    url: "https://www.afge.org",
    description: "American Federation of Government Employees national website",
  },
  {
    name: "OPM.gov",
    url: "https://www.opm.gov",
    description: "Office of Personnel Management - federal employee information",
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
  {
    name: "FedSmith",
    url: "https://www.fedsmith.com",
    description: "Federal employee news and information",
  },
  {
    name: "GovExec",
    url: "https://www.govexec.com",
    description: "Government executive news and analysis",
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
          <p className="mt-4 text-xl text-white/80">
            Access your collective bargaining agreements, forms, and important
            union resources
          </p>
        </div>
      </section>

      {/* CBAs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-8 h-8 text-union-blue" />
            <h2 className="text-3xl font-bold text-union-blue">
              Collective Bargaining Agreements
            </h2>
          </div>
          <div className="section-divider w-20 mt-2 mb-8" />
          <p className="text-gray-600 mb-10 max-w-3xl">
            Your collective bargaining agreement (CBA) is your contract with
            management. It outlines your rights, working conditions, pay, leave,
            and other important workplace protections. Contact your steward if
            you need help understanding any provision.
          </p>

          <div className="space-y-4">
            {cbas.map((cba) => (
              <div
                key={cba.agency}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="w-16 h-16 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src={`/images/agencies/${cba.agency.toLowerCase()}.png`}
                    alt={cba.agency}
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-union-blue">
                    {cba.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {cba.description}
                  </p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-union-blue text-white rounded-lg font-medium hover:bg-union-blue-dark transition-colors shrink-0">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Resources */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Key Resources
          </h2>
          <div className="section-divider w-20 mt-2 mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow"
              >
                <resource.icon className="w-10 h-10 text-union-blue mb-5" />
                <h3 className="text-xl font-bold text-union-blue mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <button className="flex items-center gap-2 text-union-blue font-semibold hover:text-union-red transition-colors">
                  <Download className="w-4 h-4" />
                  {resource.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Useful Links
          </h2>
          <div className="section-divider w-20 mt-2 mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-gray-600 text-sm mt-1">
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
