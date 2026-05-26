"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const searchableContent = [
  { title: "Weingarten Rights", url: "/resources", category: "Rights", keywords: "weingarten representation interview investigatory rights union" },
  { title: "File a Grievance", url: "/grievance", category: "Help", keywords: "grievance file complaint dispute problem issue workplace" },
  { title: "Collective Bargaining Agreements", url: "/resources", category: "Documents", keywords: "cba contract agreement bargaining nhtsa fmcsa fta phmsa ost" },
  { title: "Join AFGE Local 3313", url: "/how-to-join", category: "Membership", keywords: "join member signup dues enrollment sf-1187 e-dues how" },
  { title: "Member Benefits", url: "/benefits", category: "Benefits", keywords: "benefits pay telework schedule leave protection representation" },
  { title: "Union Officials & Leadership", url: "/union-officials", category: "People", keywords: "officers president vice steward board leadership executive" },
  { title: "Contact Your Steward", url: "/contact", category: "Help", keywords: "steward help contact support assistance representation" },
  { title: "Upcoming Meetings & Events", url: "/events", category: "Events", keywords: "meeting event calendar schedule monthly general membership" },
  { title: "Latest News & Updates", url: "/news", category: "News", keywords: "news update communication newsletter announcement policy" },
  { title: "Return to Office Policy", url: "/news", category: "Policy", keywords: "return office telework remote work rto opm guidance" },
  { title: "FAQ - Common Questions", url: "/faq", category: "Help", keywords: "faq question answer help how what when dues cancel" },
  { title: "Disciplinary Action Help", url: "/grievance", category: "Help", keywords: "discipline disciplinary action proposed removal suspension reprimand" },
  { title: "About AFGE Local 3313", url: "/about", category: "About", keywords: "about us who mission history union local 3313" },
  { title: "President's Message", url: "/presidents-message", category: "Leadership", keywords: "president message jennifer rodes address letter" },
  { title: "NHTSA Employees", url: "/union-officials", category: "Agency", keywords: "nhtsa highway traffic safety administration" },
  { title: "FMCSA Employees", url: "/union-officials", category: "Agency", keywords: "fmcsa motor carrier safety administration" },
  { title: "FTA Employees", url: "/union-officials", category: "Agency", keywords: "fta federal transit administration" },
  { title: "PHMSA Employees", url: "/union-officials", category: "Agency", keywords: "phmsa pipeline hazardous materials safety" },
  { title: "OST Employees", url: "/union-officials", category: "Agency", keywords: "ost office secretary transportation" },
  { title: "How to File a Grievance", url: "/grievance", category: "Help", keywords: "grievance file step process how arbitration" },
  { title: "Pay & Compensation", url: "/benefits", category: "Benefits", keywords: "pay salary compensation raise step increase locality" },
  { title: "Telework & Remote Work", url: "/benefits", category: "Benefits", keywords: "telework remote work home flexible schedule compressed" },
  { title: "MARAD Employees", url: "/union-officials", category: "Agency", keywords: "marad maritime administration" },
  { title: "Meeting Recordings", url: "/meeting-recordings", category: "Resources", keywords: "meeting recording video lunch learn town hall" },
  { title: "New Member Orientation", url: "/new-member-orientation", category: "Membership", keywords: "new member orientation welcome onboarding start" },
  { title: "In The News", url: "/in-the-news", category: "News", keywords: "news media coverage press article civil service strong" },
  { title: "Labor Management Forums", url: "/labor-management-forums", category: "Partnership", keywords: "labor management forum partnership collaboration" },
];

const aiSuggestions = [
  "How do I file a grievance?",
  "What are my Weingarten rights?",
  "How do I join the union?",
  "Who is my steward?",
  "Where is my CBA?",
];

export default function AISearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchableContent>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const terms = query.toLowerCase().split(" ");
    const scored = searchableContent
      .map((item) => {
        const searchText = `${item.title} ${item.keywords} ${item.category}`.toLowerCase();
        const score = terms.reduce((acc, term) => {
          if (searchText.includes(term)) return acc + 1;
          return acc;
        }, 0);
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    setResults(scored);
  }, [query]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white/70 text-sm hover:bg-white/20 transition-colors"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-mono">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100]" onClick={() => setIsOpen(false)}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative max-w-2xl mx-auto mt-[15vh] px-4" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <Sparkles className="w-5 h-5 text-union-gold shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about your union..."
              className="flex-1 text-lg outline-none placeholder:text-gray-400"
            />
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-2">
                {results.map((result) => (
                  <Link
                    key={`${result.title}-${result.url}`}
                    href={result.url}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-union-light transition-colors group"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-union-blue group-hover:text-union-red transition-colors">
                        {result.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{result.category}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-union-red transition-colors" />
                  </Link>
                ))}
              </div>
            ) : query.length > 0 ? (
              <div className="p-8 text-center text-gray-400">
                <p>No results found. Try different keywords.</p>
              </div>
            ) : (
              <div className="p-4">
                <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Quick searches
                </p>
                {aiSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-union-light transition-colors text-left group"
                  >
                    <Search className="w-4 h-4 text-gray-300 shrink-0" />
                    <span className="text-gray-600 group-hover:text-union-blue transition-colors">
                      {suggestion}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-union-gold" />
              AI-powered search
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-[10px] font-mono">ESC</kbd>{" "}
              to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
