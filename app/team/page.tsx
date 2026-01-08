export const metadata = {
  title: "Team | Janett Labs",
  description: "The people behind Janett Labs",
};

export default function TeamPage() {
  return (
    <div className="container-narrow py-16">
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-2">Team</h1>
        <p className="text-[var(--color-text-muted)]">
          A small, focused team of researchers and engineers
        </p>
      </section>

      <div className="prose-custom">
        <p>
          We are assembling a team of researchers and engineers who share our
          conviction that learning is the master skill—the skill that makes all
          other skills possible.
        </p>
        <p>
          Our work sits at the intersection of cognitive science, neuroscience,
          and machine learning. We value rigor over intuition, evidence over
          folklore, and long-term impact over short-term metrics.
        </p>
      </div>

      <div className="mt-12 p-6 border border-[var(--color-border)] rounded">
        <h2 className="text-lg font-medium mb-2">Join Us</h2>
        <p className="text-[var(--color-text-muted)]">
          We&apos;re looking for exceptional people who want to work on
          foundational problems in AI-augmented learning. If you&apos;re
          interested, reach out.
        </p>
      </div>
    </div>
  );
}
