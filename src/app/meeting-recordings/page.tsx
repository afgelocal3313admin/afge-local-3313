import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PlayCircle, Calendar, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Meeting Recordings",
  description:
    "Access recordings of AFGE Local 3313 union meetings, lunch and learns, and town halls for DOT employees.",
};

const recordings = [
  {
    title: "Employee Rights Lunch Meeting",
    date: "March 2025",
    duration: "45 min",
    description:
      "Overview of employee rights under the Federal Service Labor-Management Relations Statute, including Weingarten rights and protections against unfair labor practices.",
    topics: ["Weingarten Rights", "ULP Protections", "Grievance Process"],
  },
  {
    title: "Return to Office Town Hall",
    date: "February 2025",
    duration: "60 min",
    description:
      "Discussion of OPM return-to-office guidance, telework agreement negotiations, and how your CBA protects your workplace flexibility.",
    topics: ["Telework", "RTO Policy", "CBA Provisions"],
  },
  {
    title: "New Member Orientation",
    date: "January 2025",
    duration: "30 min",
    description:
      "Welcome session for new bargaining unit employees covering union membership benefits, representation rights, and how to get involved.",
    topics: ["Membership", "Benefits", "Getting Involved"],
  },
  {
    title: "Collective Bargaining Update",
    date: "December 2024",
    duration: "50 min",
    description:
      "Update on the status of collective bargaining agreement negotiations across DOT agencies, including key wins and ongoing issues.",
    topics: ["CBA Negotiations", "Agency Updates", "Member Input"],
  },
  {
    title: "Know Your Rights Workshop",
    date: "November 2024",
    duration: "40 min",
    description:
      "Interactive workshop on understanding your rights as a federal employee, including disciplinary protections and the grievance process.",
    topics: ["Employee Rights", "Discipline", "Due Process"],
  },
  {
    title: "Annual General Membership Meeting",
    date: "October 2024",
    duration: "90 min",
    description:
      "Annual meeting covering Local 3313 accomplishments, financial report, officer elections, and plans for the upcoming year.",
    topics: ["Annual Report", "Elections", "Strategic Plan"],
  },
];

export default function MeetingRecordingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-union-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-96 h-96 bg-union-gold rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-union-gold font-medium mb-4">Stay Informed</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Meeting Recordings
            </h1>
            <p className="mt-4 text-xl text-white/80">
              Access recordings of past union meetings, town halls, and
              educational sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-union-gold/10 border-b border-union-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 text-sm text-union-blue">
            <Users className="w-5 h-5 shrink-0" />
            <p>
              Meeting recordings are available to all bargaining unit employees.
              Contact your steward if you need access to a specific recording.
            </p>
          </div>
        </div>
      </section>

      {/* Recordings List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {recordings.map((recording) => (
              <div
                key={recording.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <PlayCircle className="w-7 h-7 text-union-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-union-blue">
                        {recording.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {recording.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recording.duration}
                        </span>
                      </div>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {recording.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {recording.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-union-light text-union-blue text-xs font-semibold rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-union-light rounded-2xl p-8 text-center">
            <p className="text-gray-600">
              Looking for a specific recording? Contact your union steward or
              reach out to us directly.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
