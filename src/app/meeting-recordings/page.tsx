import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, Calendar, Clock, Users, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Meeting Recordings",
  description:
    "Watch recordings of AFGE Local 3313 union meetings, lunch and learns, and town halls for DOT employees.",
};

const featuredRecording = {
  title: "Employee Rights Lunch Meeting",
  date: "January 23, 2025",
  duration: "45 min",
  youtubeId: "IM_lBXY1rgk",
  description:
    "Overview of employee rights under the Federal Service Labor-Management Relations Statute, including Weingarten rights and protections against unfair labor practices.",
  topics: ["Weingarten Rights", "ULP Protections", "Grievance Process"],
};

const recordings = [
  {
    title: "Return to Office Town Hall",
    date: "February 2025",
    duration: "60 min",
    youtubeId: "",
    description:
      "Discussion of OPM return-to-office guidance, telework agreement negotiations, and how your CBA protects your workplace flexibility.",
    topics: ["Telework", "RTO Policy", "CBA Provisions"],
  },
  {
    title: "New Member Orientation",
    date: "January 2025",
    duration: "30 min",
    youtubeId: "",
    description:
      "Welcome session for new bargaining unit employees covering union membership benefits, representation rights, and how to get involved.",
    topics: ["Membership", "Benefits", "Getting Involved"],
  },
  {
    title: "Collective Bargaining Update",
    date: "December 2024",
    duration: "50 min",
    youtubeId: "",
    description:
      "Update on the status of collective bargaining agreement negotiations across DOT agencies, including key wins and ongoing issues.",
    topics: ["CBA Negotiations", "Agency Updates", "Member Input"],
  },
  {
    title: "Know Your Rights Workshop",
    date: "November 2024",
    duration: "40 min",
    youtubeId: "",
    description:
      "Interactive workshop on understanding your rights as a federal employee, including disciplinary protections and the grievance process.",
    topics: ["Employee Rights", "Discipline", "Due Process"],
  },
  {
    title: "Annual General Membership Meeting",
    date: "October 2024",
    duration: "90 min",
    youtubeId: "",
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
              Watch recordings of past union meetings, town halls, and
              educational sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-union-gold/10 border-b border-union-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-sm text-union-blue">
              <Users className="w-5 h-5 shrink-0" />
              <p>
                Meeting recordings are available to all bargaining unit employees.
              </p>
            </div>
            <a
              href="https://www.youtube.com/channel/UCj1j_trBMcPYAND7SCYJnWg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Featured Recording with YouTube Embed */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-union-blue mb-6">
            Latest Recording
          </h2>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* YouTube Embed */}
            <div className="aspect-video bg-gray-900 relative">
              {featuredRecording.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${featuredRecording.youtubeId}`}
                  title={featuredRecording.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/60">
                  <PlayCircle className="w-20 h-20 mb-4" />
                  <p className="text-lg font-medium">Video Coming Soon</p>
                  <p className="text-sm mt-1">Check back for the recording</p>
                </div>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-union-blue">
                {featuredRecording.title}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredRecording.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredRecording.duration}
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {featuredRecording.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredRecording.topics.map((topic) => (
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
      </section>

      {/* Rally Image Banner */}
      <section className="relative py-16">
        <Image
          src="/images/rally/rally-red-shirts.jpg"
          alt="AFGE members at a rally"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Stronger Together
          </h2>
          <p className="mt-3 text-xl text-white/80 max-w-2xl mx-auto">
            Our meetings are where we connect, learn, and organize. Your voice
            matters — attend our next meeting!
          </p>
          <Link
            href="/events"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-union-gold text-union-blue-dark font-bold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            See Upcoming Meetings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Past Recordings List */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-union-blue mb-8">
            Past Recordings
          </h2>
          <div className="space-y-4">
            {recordings.map((recording) => (
              <div
                key={recording.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Thumbnail / Play Button */}
                  <div className="sm:w-64 bg-gray-900 flex items-center justify-center py-8 sm:py-0 shrink-0">
                    {recording.youtubeId ? (
                      <a
                        href={`https://www.youtube.com/watch?v=${recording.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <PlayCircle className="w-14 h-14" />
                      </a>
                    ) : (
                      <div className="text-white/30">
                        <PlayCircle className="w-14 h-14" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold text-union-blue">
                      {recording.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1.5 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {recording.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {recording.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {recording.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {recording.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-0.5 bg-union-light text-union-blue text-xs font-semibold rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
            <svg className="w-12 h-12 text-red-500 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">
              Subscribe to Our YouTube Channel
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Get notified when new meeting recordings and educational content is
              posted. Never miss an important union update.
            </p>
            <a
              href="https://www.youtube.com/channel/UCj1j_trBMcPYAND7SCYJnWg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit YouTube Channel
            </a>
          </div>

          {/* Contact for specific recordings */}
          <div className="mt-8 bg-union-light rounded-2xl p-8 text-center">
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
