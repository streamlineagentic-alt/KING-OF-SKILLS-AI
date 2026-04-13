import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "King of Skills Academy — Deep AI Skill Courses",
  description:
    "Deep skill courses for business professionals who want to master AI. Strategy, prompting, automation, and more.",
};

const COURSES = [
  {
    title: "Prompt Engineering for Business",
    level: "Foundation",
    modules: 12,
    description:
      "Master the art and science of prompting. From basic structure to advanced techniques — chain-of-thought, few-shot, mega-prompts, and system prompt architecture.",
    outcomes: [
      "Write prompts that produce consistent, high-quality outputs",
      "Build reusable prompt templates for your team",
      "Understand model behavior and how to direct it",
    ],
    price: "$197",
  },
  {
    title: "AI Strategy for Founders",
    level: "Advanced",
    modules: 8,
    description:
      "Build your company's AI strategy from first principles. Where to automate, where to augment, where to leave alone. With case studies from real companies.",
    outcomes: [
      "Develop an AI roadmap for your business",
      "Evaluate build vs. buy vs. integrate decisions",
      "Communicate AI strategy to stakeholders and investors",
    ],
    price: "$297",
  },
  {
    title: "The Automation Playbook",
    level: "Intermediate",
    modules: 10,
    description:
      "Identify, design, and deploy AI automations across your business. From customer support to content production to internal ops.",
    outcomes: [
      "Map your business processes for automation potential",
      "Build and deploy AI workflows without code",
      "Measure ROI and iterate on automation performance",
    ],
    price: "$247",
  },
  {
    title: "AI-Native Content Production",
    level: "Intermediate",
    modules: 8,
    description:
      "Build a content engine powered by AI. From ideation to production to distribution — without losing your brand voice or human touch.",
    outcomes: [
      "Produce 10x content without 10x effort",
      "Maintain brand voice across AI-generated content",
      "Build repeatable content workflows",
    ],
    price: "$197",
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-36">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Deep Skill Courses
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              King of Skills Academy
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              Not tutorials. Not overviews. Deep, structured skill courses for
              business professionals who want to master the AI era — not just
              survive it.
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            label="Courses"
            title="Choose Your Path"
            subtitle="Each course is self-paced, includes practical exercises, and comes with lifetime access."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {COURSES.map((course) => (
              <div
                key={course.title}
                className="flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-gold/30"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {course.level}
                  </span>
                  <span className="text-xs text-muted">
                    {course.modules} modules
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {course.description}
                </p>
                <div className="mt-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    What you will learn
                  </p>
                  <ul className="mt-3 space-y-2">
                    {course.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-0.5 text-gold">&#10003;</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-2xl font-bold text-foreground">
                    {course.price}
                  </p>
                  <Link
                    href="/newsletter"
                    className="rounded-full bg-gold px-6 py-2 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Codex */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="glow-gold rounded-2xl border border-gold/20 bg-surface p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Also Available
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                The King&apos;s Codex
              </h2>
              <p className="mt-4 text-muted">
                Frameworks and guidelines for AI-driven operations. The Codex is
                a living document — updated regularly with new frameworks,
                decision models, and implementation guides.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  Decision frameworks for AI adoption
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  Implementation checklists and playbooks
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  Team training guidelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold">&#10003;</span>
                  Regular updates with new frameworks
                </li>
              </ul>
              <Link
                href="/newsletter"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
              >
                Get the Codex — $97
              </Link>
            </div>
            <div className="rounded-xl border border-border bg-background p-8 text-center">
              <p className="text-6xl font-bold text-gold">50+</p>
              <p className="mt-2 text-sm text-muted">
                Frameworks, checklists, and decision models
              </p>
              <p className="mt-8 text-4xl font-bold text-gold">$97</p>
              <p className="mt-2 text-sm text-muted">
                One-time payment. Lifetime access. Free updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <SubscribeForm
            variant="card"
            heading="Start with the Free Tier"
            subheading="Not ready to buy? Subscribe free. Get daily prompts, weekly intelligence, and experience the King of Skills quality first."
          />
        </div>
      </section>
    </>
  );
}
