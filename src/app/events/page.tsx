import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Meetings",
  description:
    "View upcoming AFGE Local 3313 union meetings, events, and important dates for DOT employees.",
};

const upcomingEvents = [
  {
    title: "Monthly General Membership Meeting",
    date: "First Wednesday of each month",
    time: "12:00 PM - 1:00 PM ET",
    location: "Virtual (Microsoft Teams)",
    type: "Meeting",
    description:
      "Regular monthly meeting for all Local 3313 members. Discuss current issues, hear updates from leadership, and vote on important matters.",
  },
  {
    title: "Executive Board Meeting",
    date: "Third Wednesday of each month",
    time: "12:00 PM - 1:00 PM ET",
    location: "Virtual (Microsoft Teams)",
    type: "Board Meeting",
    description:
      "Executive board members meet to discuss union business, plan activities, and address member concerns.",
  },
  {
    title: "New Member Orientation",
    date: "Quarterly",
    time: "TBD",
    location: "Virtual",
    type: "Orientation",
    description:
      "Welcome session for new members to learn about their union rights, benefits, and how to get involved.",
  },
  {
    title: "Steward Training",
    date: "As Scheduled",
    time: "TBD",
    location: "TBD",
    type: "Training",
    description:
      "Training sessions for union stewards on representation, grievance handling, contract interpretation, and labor law.",
  },
];

const importantDates = [
  { date: "January", event: "Martin Luther King Jr. Day" },
  { date: "February", event: "Black History Month / Presidents Day" },
  { date: "March", event: "Women's History Month" },
  { date: "May", event: "Memorial Day / Public Service Recognition Week" },
  { date: "June", event: "Juneteenth" },
  { date: "July", event: "Independence Day" },
  { date: "September", event: "Labor Day" },
  { date: "October", event: "Columbus Day / Native American Day" },
  { date: "November", event: "Veterans Day / Thanksgiving" },
  { date: "December", event: "Holiday Season" },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <Image
          src="/images/banners/events.jpg"
          alt="Events & Meetings"
          fill
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Events & Meetings
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Stay connected with your union through regular meetings and events
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Upcoming Events
          </h2>
          <div className="section-divider w-20 mt-2 mb-12" />

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-32 shrink-0">
                    <span className="inline-block px-3 py-1.5 bg-union-blue/10 text-union-blue text-sm font-semibold rounded-lg">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-union-blue mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-union-blue" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-union-blue" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-union-blue" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-union-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-union-blue mb-2">
            Federal Holidays & Observances
          </h2>
          <div className="section-divider w-20 mt-2 mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {importantDates.map((item) => (
              <div
                key={item.date}
                className="bg-white rounded-lg p-5 flex items-center gap-4 shadow-sm"
              >
                <div className="w-16 h-16 bg-union-blue/10 rounded-lg flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-union-blue" />
                </div>
                <div>
                  <p className="font-semibold text-union-blue">{item.date}</p>
                  <p className="text-gray-600 text-sm">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 text-union-blue mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-union-blue">Get Involved</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your participation makes our union stronger. Attend meetings, vote
            on important issues, and help shape the future of your workplace.
          </p>
        </div>
      </section>
    </>
  );
}
