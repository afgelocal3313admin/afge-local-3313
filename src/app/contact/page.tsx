"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-union-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Get in touch with AFGE Local 3313. We are here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-union-blue mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-union-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-union-blue">Email</h3>
                    <a
                      href="mailto:info@afge-local3313.org"
                      className="text-gray-600 hover:text-union-blue transition-colors"
                    >
                      info@afge-local3313.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-union-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-union-blue">
                      Union Stewards
                    </h3>
                    <p className="text-gray-600">
                      Contact your agency steward for immediate workplace
                      assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-union-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-union-blue">Location</h3>
                    <p className="text-gray-600">
                      U.S. Department of Transportation
                      <br />
                      Washington, DC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-union-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-union-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-union-blue">
                      Response Time
                    </h3>
                    <p className="text-gray-600">
                      We aim to respond to all inquiries within 1-2 business
                      days
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Note */}
              <div className="mt-8 p-5 bg-union-light rounded-xl">
                <h3 className="font-semibold text-union-blue mb-2">
                  Urgent Workplace Issue?
                </h3>
                <p className="text-gray-600 text-sm">
                  If you are facing an immediate workplace issue or need
                  representation for an investigatory interview, contact your
                  union steward directly. Do not wait for a form response.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-union-blue mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-union-blue mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We will get back to you within
                      1-2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-union-blue font-semibold hover:text-union-red transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-union-blue focus:border-union-blue transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-union-blue focus:border-union-blue transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-union-blue focus:border-union-blue transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="agency"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Agency
                      </label>
                      <select
                        id="agency"
                        name="agency"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-union-blue focus:border-union-blue transition-colors"
                      >
                        <option value="">Select your agency</option>
                        <option value="nhtsa">NHTSA</option>
                        <option value="fmcsa">FMCSA</option>
                        <option value="fta">FTA</option>
                        <option value="phmsa">PHMSA</option>
                        <option value="ost">OST</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-union-blue focus:border-union-blue transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">
                          Membership Information
                        </option>
                        <option value="grievance">
                          Grievance / Workplace Issue
                        </option>
                        <option value="representation">
                          Representation Request
                        </option>
                        <option value="cba">
                          Contract / CBA Question
                        </option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-union-blue focus:border-union-blue transition-colors resize-y"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-union-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
