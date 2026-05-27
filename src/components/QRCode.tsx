"use client";

import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function QRCodeModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const siteUrl = "https://www.afgelocal3313.org";
  const qrRef = useRef<HTMLDivElement>(null);

  function handleCopy() {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownloadQR() {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    const img = new window.Image();
    img.onload = () => {
      if (!ctx) return;
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, 600, 600);
      ctx.drawImage(img, 0, 0, 600, 600);
      const link = document.createElement("a");
      link.download = "afge-local-3313-qr.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white/70 rounded-lg text-sm hover:bg-white/10 hover:text-white transition-colors"
        aria-label="Open on mobile"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        Scan QR Code
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-union-blue px-6 py-5 text-center">
              <h3 className="text-xl font-bold text-white">
                Open on Your Phone
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Scan with your phone&apos;s camera
              </p>
            </div>

            {/* QR Code */}
            <div className="p-8 flex flex-col items-center">
              <div
                ref={qrRef}
                className="bg-white p-4 rounded-xl shadow-inner border border-gray-100"
              >
                <QRCodeSVG
                  value={siteUrl}
                  size={200}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#003366"
                  imageSettings={{
                    src: "/images/logos/afge-3313-icon.png",
                    height: 35,
                    width: 35,
                    excavate: true,
                  }}
                />
              </div>

              {/* URL display */}
              <div className="mt-5 w-full flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-200">
                <svg
                  className="w-4 h-4 text-union-blue shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"
                  />
                </svg>
                <span className="text-sm font-medium text-union-blue truncate flex-1">
                  www.afgelocal3313.org
                </span>
                <button
                  onClick={handleCopy}
                  className="text-xs font-semibold text-union-blue hover:text-union-red transition-colors shrink-0"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 pb-6 space-y-2">
              <button
                onClick={handleDownloadQR}
                className="w-full py-2.5 bg-union-blue text-white rounded-lg font-semibold hover:bg-union-blue-dark transition-colors text-sm inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download QR Code
              </button>
              <button
                onClick={() => setOpen(false)}
                className="w-full py-2 text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
