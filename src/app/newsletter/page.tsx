import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "The King's Brief — Weekly AI Newsletter",
  description:
    "Weekly AI intelligence for business professionals. The King's Brief delivers curated AI news, mega-prompts, frameworks, and actionable strategies every week.",
};

const BLOCKS = [
  {
    name: "The Crown Jewel",
    description: "The single most important AI development of the week, analyzed through a business lens.",
  },
  {
    name: "The Intelligence Report",
    description: "3-5 curated AI news items with strategic commentary — what happened and why it matters to you.",
  },
  {
    name: "The Prompt of the Week",
    description: "One battle-tested mega-prompt you can deploy in your business immediately.",
  },
  {
    name: "The Skill Spotlight",
    description: "One AI skill deep-dive — what it is, why it matters, and how to acquire it fast.",
  },
  {
    name: "The Framework",
    description: "A reusable mental model or decision framework for navigating AI in business.",
  },
  {
    name: "The Tool Stack",
    description: "One AI tool reviewed with honest assessment — what it does well, what it doesn't.",
  },
  {
    name: "The King's Take",
    description: "A philosophical observation on the AI era. The thought that stays with you all week.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-36">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Free Weekly Newsletter
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              The King&apos;s Brief
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              One email per week. Seven blocks of intelligence. Zero fluff.
              Written for business professionals who want mastery, not awareness.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-lg">
            <SubscribeForm />
            <p className="mt-3 text-center text-xs text-muted">
              Join thousands of professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Block Architecture */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <SectionHeading
            label="The Architecture"
            title="Seven Blocks. One Mission."
            subtitle="Every issue of The King's Brief follows the same proven structure — so you know exactly what to expect and can extract value in under 10 minutes."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {BLOCKS.map((block, i) => (
              <div
                key={block.name}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{block.name}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {block.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Intelligence */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <SectionHeading
          label="Also Included"
          title="The King's Intelligence"
          subtitle="In addition to the weekly Brief, subscribers get access to The King's Intelligence — daily AI news curated for business people. No algorithms. No noise. Just signal."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Daily Delivery", body: "Fresh AI intelligence in your inbox every morning." },
            { title: "Business Filter", body: "Every story is filtered for business relevance — not tech hype." },
            { title: "Action-Ready", body: "Each piece includes a 'So What' — what this means for your next move." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-bold text-gold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SubscribeForm
            variant="card"
            heading="Ready to Master the AI Era?"
            subheading="Subscribe to The King's Brief. It's free. It's weekly. It's the only AI newsletter you'll actually read."
          />
        </div>
      </section>
    </>
  );
}
