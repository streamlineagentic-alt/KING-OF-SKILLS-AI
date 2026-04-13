"use client";

import { useState } from "react";

interface SubscribeFormProps {
  variant?: "inline" | "card";
  heading?: string;
  subheading?: string;
}

export default function SubscribeForm({
  variant = "inline",
  heading,
  subheading,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're in. Welcome to the inner circle.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  };

  if (variant === "card") {
    return (
      <div className="glow-gold rounded-2xl border border-border bg-surface p-8 md:p-12">
        {heading && (
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">
            {heading}
          </h3>
        )}
        {subheading && (
          <p className="mt-2 text-muted">{subheading}</p>
        )}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-gold-light disabled:opacity-50"
          >
            {status === "loading" ? "Joining..." : "Subscribe Free"}
          </button>
        </form>
        {message && (
          <p
            className={`mt-3 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}
          >
            {message}
          </p>
        )}
        <p className="mt-3 text-xs text-muted">
          No spam. Unsubscribe anytime. Your data stays yours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-gold-light disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Subscribe Free"}
      </button>
      {message && (
        <p
          className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
