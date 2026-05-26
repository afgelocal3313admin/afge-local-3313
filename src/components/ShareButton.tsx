"use client";

import { useState } from "react";

export default function ShareButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  async function handleShare() {
    const shareData = {
      title: "AFGE Local 3313",
      text: "AFGE Local 3313 — Representing Department of Transportation Employees. Protecting your rights and advocating for fair treatment.",
      url: "https://www.afgelocal3313.org",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareData.url);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  }

  return (
    <div className="fixed bottom-24 right-5 z-40">
      <div className="relative">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap shadow-lg">
            Link copied!
            <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -translate-y-1" />
          </div>
        )}
        <button
          onClick={handleShare}
          className="w-12 h-12 bg-union-blue text-white rounded-full shadow-lg hover:bg-union-blue-dark hover:shadow-xl transition-all flex items-center justify-center group"
          aria-label="Share this site"
          title="Share this site"
        >
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
