"use client";

import { useState } from "react";
import { Mail, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-union-blue via-union-blue-dark to-union-blue overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-union-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-[150px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-union-gold/20 border border-union-gold/30 rounded-full text-union-gold text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          AI-Powered Updates
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Stay Informed, Stay Protected
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
          Subscribe to receive personalized union updates, policy changes that
          affect your agency, and important action alerts delivered to your
          inbox.
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-green-500/20 border border-green-400/30 rounded-2xl">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-white font-medium">
              You&apos;re subscribed! Check your email for a confirmation.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-union-gold/50 focus:border-union-gold/50 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-union-gold text-union-blue-dark rounded-xl font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <p className="mt-4 text-white/40 text-sm">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
