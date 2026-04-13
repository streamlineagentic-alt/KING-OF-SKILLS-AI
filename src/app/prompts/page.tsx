import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "The Daily Prompt — Free Mega-Prompts",
  description:
    "One free mega-prompt every day. Battle-tested, professionally engineered prompts for business, strategy, marketing, and operations.",
};

const SAMPLE_PROMPTS = [
  {
    title: "The Strategic Advisor",
    category: "Strategy",
    preview:
      "Transform any business decision into a structured analysis with risk assessment, opportunity mapping, and a clear recommendation — using first-principles thinking.",
  },
  {
    title: "The Content Architect",
    category: "Marketing",
    preview:
      "Generate a complete 30-day content calendar with hooks, angles, and distribution strategy — tailored to your industry and audience.",
  },
  {
    title: "The Negotiation Prep",
    category: "Operations",
    preview:
      "Prepare for any negotiation with BATNA analysis, counterargument mapping, and scripted responses for the 10 most likely objections.",
  },
  {
    title: "The Competitive Intelligence Brief",
    category: "Strategy",
    preview:
      "Analyze any competitor's positioning, pricing, messaging, and gaps — then generate a strategic response plan.",
  },
  {
    title: "The Process Automator",
    category: "Operations",
    preview:
      "Document any business process, identify automation opportunities, and generate an implementation roadmap with ROI estimates.",
  },
  {
    title: "The Pitch Crafter",
    category: "Sales",
    preview:
      "Build a complete pitch deck narrative with problem-solution framing, social proof structure, and objection handling — for investors or clients.",
  },
];

const CATEGORIES = [
  "Strategy",
  "Marketing",
  "Operations",
  "Sales",
  "Leadership",
  "Finance",
  "Product",
  "Hiring",
];

export default function PromptsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-36">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Free Every Day
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              The Daily Prompt
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              One mega-prompt, every day. Professionally engineered. Business
              tested. Free forever. Subscribe to get it delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-border px-4 py-1.5 text-xs text-muted"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Prompts */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            label="Sample Prompts"
            title="A Taste of What You Get"
            subtitle="These are examples from the Daily Prompt archive. Subscribers get a fresh one every single day."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PROMPTS.map((prompt) => (
              <div
                key={prompt.title}
                className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-gold/30"
              >
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                  {prompt.category}
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {prompt.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {prompt.preview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Bundle Upsell */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="glow-gold rounded-2xl border border-gold/20 bg-surface p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Want More?
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                The King&apos;s Prompt Bundle
              </h2>
              <p className="mt-4 text-muted">
                500+ mega-prompts organized by business function. Strategy,
                marketing, operations, sales, leadership, finance, product, and
                more. Every prompt battle-tested and professionally engineered.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  500+ mega-prompts across 8 business categories
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  Regular updates with new prompts added monthly
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  Works with ChatGPT, Claude, Gemini, and any LLM
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  Lifetime access, one-time payment
                </li>
              </ul>
              <Link
                href="/newsletter"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
              >
                Get the Bundle — $97
              </Link>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Preview: The Strategic Advisor Prompt
              </p>
              <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed text-muted">
                <p>
                  You are a strategic advisor with 20 years of experience in
                  [INDUSTRY]. I need your help analyzing a critical business
                  decision...
                </p>
                <p className="text-gold/50">[Full prompt: 847 words]</p>
                <p className="text-gold/50">[Includes: 6 analysis frameworks]</p>
                <p className="text-gold/50">
                  [Output: Structured decision brief]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SubscribeForm
            variant="card"
            heading="Get the Daily Prompt in Your Inbox"
            subheading="Subscribe free. One mega-prompt delivered every day. No spam."
          />
        </div>
      </section>
    </>
  );
}
