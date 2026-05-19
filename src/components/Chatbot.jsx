import { useState, useRef } from "react";
import { botMessages, chipSuggestions } from "../data";
import "./Chatbot.css";

const FALLBACK_REPLIES = {
  "admissions 2025":
    "Applications for 2025–26 are open! Apply at kiit.ac.in. KIIT-EE is the primary entrance exam. Engineering deadline: March 31, 2025.",
  "placement stats":
    "KIIT has a 90%+ placement rate. Highest package: ₹44 LPA. Over 500 companies recruit from campus annually.",
  "fee structure":
    "B.Tech fees start at ~₹3.5 lakhs/year. Visit the admissions portal for detailed fee structure by program.",
  "campus facilities":
    "KIIT's 25 sq km campus includes hostels, a 1000-bed hospital, sports complex, 150+ clubs, cafes, banks and more — a true university township.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(botMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const scrollToBottom = () =>
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 100);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText) return;
    setInput("");

    const userMsg = { from: "user", text: userText, time: "Just now" };
    setMessages((m) => [...m, userMsg]);
    scrollToBottom();

    // Check local fallbacks first
    const fallback = FALLBACK_REPLIES[userText.toLowerCase()];
    if (fallback) {
      setMessages((m) => [...m, { from: "bot", text: fallback, time: "Just now" }]);
      scrollToBottom();
      return;
    }

    // Call Claude API
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system:
            "You are a helpful assistant for KIIT University (Kalinga Institute of Industrial Technology), Bhubaneswar, Odisha, India. Answer questions about KIIT's academics, admissions, campus life, placements, rankings, and facilities. Keep responses concise (2-4 sentences). If unsure, direct users to kiit.ac.in or the helpline 1800-345-6789.",
          messages: [{ role: "user", content: userText }],
        }),
      });
      const data = await res.json();
      const reply =
        data.content?.[0]?.text ||
        "Thanks for your question! For detailed info, please visit kiit.ac.in or call 1800-345-6789.";
      setMessages((m) => [...m, { from: "bot", text: reply, time: "Just now" }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: "Thanks for reaching out! Please visit kiit.ac.in or call our helpline at 1800-345-6789 for assistance.",
          time: "Just now",
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  return (
    <>
      {/* Chat Window */}
      <div className={`chat-window ${open ? "open" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">🎓</div>
            <div>
              <div className="chat-name">KIIT Assistant</div>
              <div className="chat-status">
                <span className="chat-dot" />
                Online
              </div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
            ✕
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              <div className="chat-bubble">{m.text}</div>
              <span className="chat-time">{m.time}</span>
            </div>
          ))}
          {loading && (
            <div className="chat-msg bot">
              <div className="chat-bubble chat-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="chat-suggestions">
          {chipSuggestions.map((c) => (
            <button key={c} className="chat-chip" onClick={() => sendMessage(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="chat-input-row">
          <input
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask anything about KIIT..."
            disabled={loading}
          />
          <button className="chat-send" onClick={() => sendMessage()} disabled={loading}>
            →
          </button>
        </div>
      </div>

      {/* Trigger button */}
      <button className="chat-trigger" onClick={() => setOpen((o) => !o)} aria-label="Open chat">
        {open ? "✕" : "💬"}
        {!open && <span className="badge">1</span>}
      </button>
    </>
  );
}
