export const metadata = {
  title: "Research | Janett Labs",
  description: "Our research at the intersection of cognitive science, neuroscience, and machine learning",
};

export default function ResearchPage() {
  return (
    <div className="container-narrow py-16">
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-2">Research</h1>
        <p className="text-[var(--color-text-muted)]">
          Our work at the intersection of cognitive science, neuroscience, and machine learning
        </p>
      </section>

      <div className="prose-custom">
        <p>
          Our research program focuses on building the foundational models for
          AI-augmented learning. We are particularly interested in:
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-lg font-medium mb-2">Pedagogical Orchestration</h2>
          <p className="text-[var(--color-text-muted)]">
            How do we decide what to present to a learner, when to present it,
            and in what sequence? We&apos;re developing computational models that
            optimize learning trajectories based on cognitive science principles.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">Adaptive Assessment</h2>
          <p className="text-[var(--color-text-muted)]">
            Traditional testing measures what a learner knows at a single point
            in time. We&apos;re building systems that continuously model learner
            knowledge and predict future performance.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">Socratic AI</h2>
          <p className="text-[var(--color-text-muted)]">
            The best teachers don&apos;t give answers—they ask questions. We&apos;re
            exploring how language models can engage in genuine Socratic
            dialogue that promotes deep understanding.
          </p>
        </div>
      </div>

      <p className="mt-12 text-[var(--color-text-muted)]">
        More details coming soon.
      </p>
    </div>
  );
}
