import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SubscribeForm from "@/components/SubscribeForm";
import { PAID_PRODUCTS, PREMIUM_PRODUCTS, FREE_TIER } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 lg:py-44">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-gold opacity-0">
              The Single Source of Truth for the AI Era
            </p>
            <h1 className="animate-fade-in-up animate-delay-100 mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 md:text-6xl lg:text-7xl">
              Master Skills Faster
              <br />
              <span className="text-gradient-gold">Than Everyone Else</span>
            </h1>
            <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-xl text-lg text-muted opacity-0">
              Daily AI intelligence, master prompts, skill frameworks, and
              courses — all filtered through one consistent voice, one clear
              philosophy, and one practical purpose.
            </p>
            <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center">
              <Link
                href="/newsletter"
                className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
              >
                Join The King&apos;s Brief — Free
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-border px-8 py-3 text-sm text-muted transition-colors hover:border-gold hover:text-foreground"
              >
                Learn the Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <blockquote className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            &ldquo;The world in 2030 does not reward the most intelligent. It
            rewards the most{" "}
            <span className="text-gold">deliberately skilled</span>. Machines
            handle knowledge. Humans handle judgment, taste, synthesis, and the
            ability to direct systems.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted">
            — The King of Skills Philosophy
          </p>
        </div>
      </section>

      {/* What You Get Free */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          label="No cost to start"
          title="Everything Free. No Strings."
          subtitle="Start with the free tier. Get daily intelligence, weekly insights, and one powerful prompt every day."
        />
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {FREE_TIER.items.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-gold/30"
            >
              <p className="text-sm font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Paid Products */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            label="Go deeper"
            title="Products for Serious Operators"
            subtitle="500+ mega-prompts. Proven frameworks. Deep skill courses. For professionals who want mastery, not awareness."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {PAID_PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{product.description}</p>
                <p className="mt-6 text-2xl font-bold text-gold">
                  {product.price}
                </p>
                <Link
                  href="/newsletter"
                  className="mt-6 inline-block rounded-full border border-gold/40 px-6 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-background"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Tier */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          label="Premium"
          title="The Inner Circle"
          subtitle="Exclusive access, live workshops, and done-for-you AI implementation."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {PREMIUM_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="glow-gold rounded-2xl border border-gold/20 bg-surface p-8"
            >
              <h3 className="text-lg font-bold text-gold">{product.name}</h3>
              <p className="mt-2 text-sm text-muted">{product.description}</p>
              <p className="mt-6 text-2xl font-bold text-foreground">
                {product.price}
              </p>
              <Link
                href="/newsletter"
                className="mt-6 inline-block rounded-full bg-gold px-6 py-2 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
              >
                Get Access
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Three Layers */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            label="Our Approach"
            title="Three Layers in Every Piece"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "The Philosopher",
                body: "Question the assumption before accepting it. Every trend, every tool, every claim gets examined through first principles.",
              },
              {
                title: "The Strategist",
                body: "Connect the news to what it actually means for your business. Not hype. Not theory. Strategy you can execute on Monday.",
              },
              {
                title: "The Craftsman",
                body: "Deliver the tool, the prompt, the framework. Every piece of content ships with something you can use immediately.",
              },
            ].map((layer) => (
              <div
                key={layer.title}
                className="rounded-xl border border-border bg-background p-8"
              >
                <h3 className="text-lg font-bold text-gold">{layer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <SubscribeForm
          variant="card"
          heading="Join The King's Brief"
          subheading="Weekly AI intelligence for ambitious professionals. One email. Zero noise."
        />
      </section>
    </>
  );
}
