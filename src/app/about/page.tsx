import type { Metadata } from "next";
import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "About — The Philosophy Behind King of Skills AI",
  description:
    "The world in 2030 does not reward the most intelligent. It rewards the most deliberately skilled. Learn the philosophy behind King of Skills AI.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-36">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              The Philosophy
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Why King of Skills Exists
            </h1>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-muted">
            <p className="text-xl leading-relaxed text-foreground">
              The world in 2030 does not reward the most intelligent. It rewards
              the most <span className="text-gold">deliberately skilled</span>.
            </p>

            <p>
              Machines handle knowledge. Humans handle judgment, taste,
              synthesis, and the ability to direct systems. The person who
              masters skills faster than everyone else wins at everything.
            </p>

            <p>
              That is the meta-skill. That is what King of Skills teaches.
            </p>

            <p>
              The ability to identify which skills matter next — and acquire them
              faster than everyone else. That is not a skill. That is a
              superpower.
            </p>

            <div className="rounded-xl border border-gold/20 bg-background p-8">
              <h2 className="text-xl font-bold text-foreground">
                The First Principles Filter
              </h2>
              <p className="mt-4 text-muted">
                Before producing any piece of content, we ask five questions:
              </p>
              <ol className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                    1
                  </span>
                  <span>What assumption is this built on?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                    2
                  </span>
                  <span>Is that assumption mine or inherited?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                    3
                  </span>
                  <span>
                    What is the base reality, stripped of inherited thinking?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                    4
                  </span>
                  <span>
                    Does this deliver something the reader cannot find elsewhere?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                    5
                  </span>
                  <span>
                    Would a reader save this, share this, or pay for this?
                  </span>
                </li>
              </ol>
              <p className="mt-4 text-sm text-gold">
                If the answer to #5 is no — we rebuild it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          What King of Skills Is Not
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              not: "Not a newsletter",
              is: "A weekly intelligence briefing with the structure and rigor of a professional report.",
            },
            {
              not: "Not a course platform",
              is: "A skill acquisition system designed for people who already know how to work — and want to work smarter.",
            },
            {
              not: "Not a prompt library",
              is: "A prompt engineering operation that delivers tested, production-grade prompts daily.",
            },
            {
              not: "Not a hype machine",
              is: "A calm, authoritative filter between the noise of AI news and the signal that matters to your business.",
            },
          ].map((item) => (
            <div
              key={item.not}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="font-bold text-red-400 line-through decoration-red-400/50">
                {item.not}
              </p>
              <p className="mt-2 text-sm text-muted">{item.is}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Three Voices */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Three Voices. One Author.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">
            Every piece of King of Skills content carries three layers. This is
            not an accident. It is the architecture.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                voice: "The Philosopher",
                description:
                  "Questions the assumption before accepting it. Every trend, every tool, every claim gets examined through first principles. We do not accept the premise — we test it.",
              },
              {
                voice: "The Strategist",
                description:
                  "Connects the news to what it means for the reader. Not hype. Not theory. Strategy you can execute on Monday morning. If it does not change what you do, it does not make the cut.",
              },
              {
                voice: "The Craftsman",
                description:
                  "Delivers the tool, the prompt, the skill. Every piece of content ships with something you can use immediately. Theory without application is philosophy. We build tools.",
              },
            ].map((v) => (
              <div
                key={v.voice}
                className="rounded-xl border border-border bg-background p-8"
              >
                <h3 className="text-lg font-bold text-gold">{v.voice}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pipeline */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          The Journey
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">
          Every layer feeds the next. No cold outreach. Ever.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4">
          {[
            "Follow on social",
            "Get a free prompt",
            "Subscribe to the newsletter",
            "Build trust over weeks",
            "Get the Prompt Bundle or Codex",
            "Enroll in the Academy",
            "Join the Vault",
            "Work with the Agency",
          ].map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                {i + 1}
              </span>
              <p className="text-sm text-muted">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SubscribeForm
            variant="card"
            heading="Begin with The King's Brief"
            subheading="The free tier is where everyone starts. Subscribe now. Judge the quality yourself."
          />
        </div>
      </section>

      {/* Sovereign statement */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-lg font-medium text-foreground">
            Not a newsletter. Not a course platform. Not a prompt library.
          </p>
          <p className="mt-2 text-lg font-bold text-gold">
            All three. In one place. Under one name.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
