export const metadata = {
  title: "Research",
  description:
    "Our research agenda: how software should decide what to teach, when to teach it, and how we know it worked",
};

const areas = [
  {
    title: "Pedagogical Orchestration",
    body: "Every learning system makes scheduling and selection decisions continuously—what to show next, when to review, when to advance. These decisions are usually made by heuristics no one has tested. We build models that make the decision explicit, then measure what different policies do to retention and transfer.",
    question:
      "Which sequencing decisions actually matter, and by how much?",
  },
  {
    title: "Knowledge Modeling and Assessment",
    body: "A tutor is only as good as its belief about the learner. Traditional assessment measures a single point in time; adaptive systems maintain a running estimate that is rarely audited. We study how these estimates are formed, how quickly they go stale, and how confidently a system should act on one.",
    question:
      "What does a system know about a learner, and when is it wrong?",
  },
  {
    title: "Instructional Dialogue",
    body: "Human tutoring produces effects that classroom instruction does not, and language models make conversational instruction cheap for the first time. But the mechanism is unsettled: it is not obvious how much of the effect comes from questioning, from responsiveness, from the pressure to articulate, or from attention alone. We isolate the components and test them separately.",
    question:
      "What does a conversation do that a well-written explanation does not?",
  },
  {
    title: "Difficulty and Load",
    body: "Desirable difficulties improve long-term retention while making learning feel worse in the moment. Software can calibrate difficulty precisely, which makes it the right instrument for a question the literature has mostly answered in coarse increments: how much difficulty, for whom, and at what point in acquisition.",
    question: "Where is the boundary between productive and destructive struggle?",
  },
  {
    title: "Measurement",
    body: "The dominant metrics in learning technology—engagement, completion, time on task—measure activity rather than acquisition, and they are easy to improve without teaching anyone anything. We work on outcome measures that survive a delay: delayed retention tests, transfer to structurally similar but superficially novel problems, and retention curves rather than single scores.",
    question: "What would count as evidence that a tool taught someone something?",
  },
];

export default function ResearchPage() {
  return (
    <div className="container-narrow py-16">
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-2">Research</h1>
        <p className="text-[var(--color-text-muted)]">
          How software should decide what to teach, when to teach it, and how we
          know it worked
        </p>
      </section>

      <div className="prose-custom">
        <p>
          The lab studies learning and teaching as engineering problems with
          empirical answers. Cognitive science has established a great deal about
          how memory and understanding work; comparatively little of it has been
          implemented, and less of it has been tested once implemented. Our
          program is organized around closing that distance in specific,
          measurable places.
        </p>
        <p>
          Software plays two roles here. It is the object of study—the systems
          people actually learn from—and it is the apparatus, the only practical
          way to run instructional experiments at a scale and precision where the
          effects are legible.
        </p>
      </div>

      <div className="divider" />

      <h2 className="section-title">Areas</h2>

      <div className="mt-6 space-y-10">
        {areas.map((area) => (
          <div key={area.title}>
            <h3 className="text-lg font-medium mb-2">{area.title}</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {area.body}
            </p>
            <p className="mt-3 pl-4 border-l-2 border-[var(--color-border)] text-[var(--color-text-muted)] italic">
              {area.question}
            </p>
          </div>
        ))}
      </div>

      <div className="divider" />

      <section>
        <h2 className="section-title">Method</h2>
        <div className="prose-custom">
          <p>
            We prefer questions that can be answered with a controlled comparison
            over questions that can only be answered with a demonstration. That
            usually means building a small instrument, running it against a
            realistic task, and reporting what happened—including when nothing
            did.
          </p>
          <p>
            Results are reported against delayed outcomes wherever the design
            permits it. Materials, analysis code, and data are released where
            consent allows, so that any finding here can be checked rather than
            taken on trust.
          </p>
        </div>
      </section>

      <div className="mt-12 p-6 border border-[var(--color-border)] rounded">
        <h2 className="text-lg font-medium mb-2">Collaboration</h2>
        <p className="text-[var(--color-text-muted)]">
          We work with researchers, teachers, and teams building learning tools
          who want a question answered properly rather than assumed. If you have
          a population, a curriculum, or a system worth studying, get in touch.
        </p>
      </div>
    </div>
  );
}
