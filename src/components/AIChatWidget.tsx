"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react";

type Message = {
  role: "bot" | "user";
  text: string;
};

const quickReplies = [
  "How do I file a grievance?",
  "What are Weingarten rights?",
  "Who is my union steward?",
  "How do I join the union?",
];

function getAIResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("grievance") || q.includes("complaint") || q.includes("problem")) {
    return "To file a grievance, contact your union steward immediately. They will help determine if you have a valid grievance and guide you through the process. Time limits apply, so don't delay! Visit our Grievance page at /grievance for the full step-by-step process.";
  }
  if (q.includes("weingarten") || q.includes("investigat") || q.includes("interview")) {
    return 'You have Weingarten Rights! If called into a meeting that could lead to discipline, you can say: "I request my union representative be present. Until my representative arrives, I choose not to answer any questions." Visit /resources to download your Weingarten Rights card.';
  }
  if (q.includes("steward") || q.includes("representative")) {
    return "Your union steward is your first point of contact for workplace issues. Each DOT agency has assigned stewards. Visit our Union Officials page at /union-officials to find your agency's steward, or email askafgelocal3313@outlook.com.";
  }
  if (q.includes("join") || q.includes("member") || q.includes("signup") || q.includes("dues")) {
    return "To join AFGE Local 3313, visit /how-to-join for step-by-step instructions. You can join online at join.afge.org/L3313 or complete an SF-1187 form. New members should also check out /new-member-orientation for everything you need to know!";
  }
  if (q.includes("telework") || q.includes("remote") || q.includes("office") || q.includes("rto")) {
    return "Telework policies are negotiated in your collective bargaining agreement. If management changes your telework arrangement without proper negotiation, contact your steward. Check /news for the latest updates on return-to-office guidance.";
  }
  if (q.includes("cba") || q.includes("contract") || q.includes("bargaining") || q.includes("agreement")) {
    return "Your Collective Bargaining Agreement (CBA) is your workplace bill of rights. We have separate CBAs for each agency (NHTSA, FMCSA, FTA, MARAD, PHMSA, OST). Download yours from /resources or ask your steward for a copy.";
  }
  if (q.includes("marad") || q.includes("maritime")) {
    return "MARAD (Maritime Administration) is one of the six DOT agencies represented by Local 3313, with 168 bargaining employees. Visit /union-officials to find your MARAD representatives.";
  }
  if (q.includes("recording") || q.includes("video") || q.includes("watch")) {
    return "Past union meeting recordings are available at /meeting-recordings. You can watch town halls, lunch and learns, and general membership meeting recordings there.";
  }
  if (q.includes("news") || q.includes("media") || q.includes("press") || q.includes("civil service")) {
    return "Check /in-the-news for media coverage and news about federal employee issues. For union-specific updates, visit /news for our latest communications.";
  }
  if (q.includes("labor management") || q.includes("forum") || q.includes("partnership")) {
    return "Labor-management forums bring union and management together to collaboratively resolve workplace issues. Learn more at /labor-management-forums.";
  }
  if (q.includes("pay") || q.includes("salary") || q.includes("raise") || q.includes("step")) {
    return "Your pay, step increases, and locality pay are negotiated in your CBA. If you believe you're improperly classified or not receiving proper compensation, contact your steward. We advocate for fair pay for all DOT employees.";
  }
  if (q.includes("meeting") || q.includes("event") || q.includes("calendar")) {
    return "General membership meetings are typically held on the first Wednesday of each month via Microsoft Teams. Check /events for the current schedule or /meeting-recordings for past meeting recordings. Your participation makes our union stronger!";
  }
  if (q.includes("discipline") || q.includes("fired") || q.includes("terminated") || q.includes("suspension")) {
    return "⚠️ If you've received a proposed disciplinary action, contact your steward IMMEDIATELY. You have limited time to respond. Don't sign anything without consulting your steward first. Visit /grievance for more details.";
  }
  if (q.includes("president") || q.includes("leader") || q.includes("officer") || q.includes("board")) {
    return "Jennifer Rodes serves as President of AFGE Local 3313, with Edward Acosta as Executive Vice President. Visit /union-officials for the complete list of officers and stewards for each DOT agency.";
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Hello! 👋 I'm the AFGE Local 3313 AI assistant. I can help you find information about your union rights, grievance procedures, membership, and more. What would you like to know?";
  }
  return "I can help with questions about grievances, Weingarten rights, membership, your CBA, pay issues, meetings, and more. For specific workplace issues, please contact your union steward or email askafgelocal3313@outlook.com. What would you like to know?";
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm the Local 3313 AI assistant. I can help you find information about your union rights, benefits, and resources. What can I help you with?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setTimeout(() => {
      const response = getAIResponse(userMsg);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 500);
  }

  function handleQuickReply(text: string) {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTimeout(() => {
      const response = getAIResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 500);
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-union-blue hover:bg-union-blue-dark"
        }`}
        aria-label="Chat with AI assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-white" />
            <Sparkles className="w-3 h-3 text-union-gold absolute -top-1 -right-1" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ height: "min(520px, calc(100vh - 140px))" }}
        >
          {/* Header */}
          <div className="bg-union-blue px-5 py-4 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-union-gold/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-union-gold" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">
                Local 3313 AI Assistant
              </h3>
              <p className="text-white/60 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Always available to help
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "bot" && (
                  <div className="w-7 h-7 bg-union-blue/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-union-blue" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-union-blue text-white rounded-br-md"
                      : "bg-gray-100 text-gray-700 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 bg-union-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />

            {/* Quick Replies (only show initially) */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 bg-union-blue/5 border border-union-blue/20 rounded-full text-xs text-union-blue hover:bg-union-blue/10 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your union rights..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-union-blue/30 focus:border-union-blue/30"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-union-blue text-white rounded-xl hover:bg-union-blue-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-gray-400 mt-2 text-center">
              AI assistant provides general info. For urgent issues, contact your steward.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
