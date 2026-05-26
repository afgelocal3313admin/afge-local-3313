"use client";

import Link from "next/link";

const sitePages = [
  { name: "Home", path: "/", description: "Main landing page with hero, agencies, features, and news" },
  { name: "About", path: "/about", description: "About AFGE Local 3313, mission, and agency info" },
  { name: "Member Benefits", path: "/benefits", description: "Benefits of union membership with comparison table" },
  { name: "How to Join", path: "/how-to-join", description: "Step-by-step guide to joining the union" },
  { name: "New Member Orientation", path: "/new-member-orientation", description: "Welcome guide for new members with rights and responsibilities" },
  { name: "Union Officials", path: "/union-officials", description: "Executive board and agency representatives" },
  { name: "President's Message", path: "/presidents-message", description: "Message from President Jennifer Rodes" },
  { name: "News & Updates", path: "/news", description: "Latest union news, policy updates, and communications" },
  { name: "Events & Meetings", path: "/events", description: "Meeting schedule and federal holidays" },
  { name: "Meeting Recordings", path: "/meeting-recordings", description: "Past meeting recordings and town halls" },
  { name: "Resources & Documents", path: "/resources", description: "Bylaws, forms, Weingarten rights, CBAs, and external links" },
  { name: "Collective Bargaining Agreements", path: "/collective-bargaining-agreements", description: "Download CBAs for NHTSA, FMCSA, FTA, OST, and PHMSA" },
  { name: "Prohibited Practices", path: "/prohibited-practices", description: "14 prohibited personnel practices and employee protections" },
  { name: "Grievance Process", path: "/grievance", description: "How to file a grievance with step-by-step guide" },
  { name: "FAQ", path: "/faq", description: "Frequently asked questions about membership and rights" },
  { name: "In The News", path: "/in-the-news", description: "Media coverage and news about federal employees" },
  { name: "Labor Management Forums", path: "/labor-management-forums", description: "Labor-management partnership and collaboration" },
  { name: "Contact", path: "/contact", description: "Contact form and union contact information" },
];

export default function PagesAdmin() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Pages</h1>
        <p className="text-gray-400 text-sm mt-1">
          Static pages built into the website. To edit page content, modify the
          source code files.
        </p>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700 text-left">
              <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Page
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Path
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {sitePages.map((page) => (
              <tr
                key={page.path}
                className="hover:bg-gray-700/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <p className="text-white font-medium text-sm">{page.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {page.description}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <code className="text-sm text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded">
                    {page.path}
                  </code>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-green-900/50 text-green-400 rounded-full text-xs font-medium">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={page.path}
                    target="_blank"
                    className="px-3 py-1.5 bg-gray-700 text-gray-300 text-xs rounded-md hover:bg-gray-600 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    View
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-2">Editing Pages</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Static pages are part of the Next.js source code. To edit a page, modify the
          corresponding file in <code className="text-gray-300 bg-gray-700/50 px-1.5 py-0.5 rounded text-xs">src/app/[page-name]/page.tsx</code>.
          For dynamic content like news posts, use the <Link href="/admin/posts" className="text-union-blue hover:underline">Posts</Link> section instead.
        </p>
      </div>
    </div>
  );
}
