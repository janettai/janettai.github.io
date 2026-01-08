export default function Home() {
  return (
    <div className="container-narrow py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-2">Janett Labs</h1>
        <p className="text-[var(--color-text-muted)]">
          A Manifesto for the Science of Learning
        </p>
      </section>

      <div className="divider" />

      {/* The Problem */}
      <section className="section">
        <h2 className="section-title">The Problem</h2>
        <div className="prose-custom">
          <p>
            A century of cognitive science has revealed how humans learn. We know that
            retrieval strengthens memory more than review. We know that spacing defeats
            forgetting. We know that difficulty, properly calibrated, is not an obstacle
            to learning—it is the mechanism of learning itself.
          </p>
          <p>And yet.</p>
          <p>
            The world&apos;s learners still highlight, re-read, and cram. They mistake
            familiarity for understanding. They optimize for the feeling of productivity
            rather than the fact of it. The gap between what science knows and what
            practice does remains vast.
          </p>
          <p>
            <strong>We exist to close that gap.</strong>
          </p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="section">
        <h2 className="section-title">The Opportunity</h2>
        <div className="prose-custom">
          <p>
            Artificial intelligence has reached an inflection point. For the first time,
            we can build systems that adapt in real time to a learner&apos;s cognitive
            state—systems that know when to challenge and when to consolidate, that
            generate infinite examples tailored to individual context, that engage in
            genuine Socratic dialogue rather than scripted response.
          </p>
          <p>
            The question is no longer <em>can we build intelligent tutors?</em>
          </p>
          <p>
            The question is: <em>will we build them on science, or on intuition?</em>
          </p>
        </div>
      </section>

      {/* Our Thesis */}
      <section className="section">
        <h2 className="section-title">Our Thesis</h2>
        <div className="prose-custom">
          <p>
            We believe the future of education will be determined not by who has the best
            content, nor by who has the largest language model—but by who builds the most
            sophisticated <strong>pedagogical engine</strong>: the orchestration layer
            that decides what to present, when to present it, how to sequence it, and why.
          </p>
          <p>
            This engine must be grounded in the biological realities of neuroplasticity,
            memory consolidation, and cognitive load. It must integrate the proven
            strategies—active retrieval, spaced repetition, interleaving, dual coding,
            elaboration, concrete examples—not as isolated tools, but as a unified
            system. And it must account for the learner&apos;s full ecosystem: their
            sleep, their stress, their beliefs about their own capacity to grow.
          </p>
          <p>
            <strong>We are not building a better textbook. We are building a trainer for the brain.</strong>
          </p>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section">
        <h2 className="section-title">Our Commitments</h2>
        <div className="prose-custom space-y-6">
          <div>
            <p>
              <strong>To Science.</strong> We build only on evidence. We reject neuromyths,
              learning styles, and pedagogical folklore. Every design decision must be
              defensible in terms of its likely impact on durable learning.
            </p>
          </div>
          <div>
            <p>
              <strong>To Rigor.</strong> We measure what matters—not engagement, not
              completion, but transfer, retention, and the ability to apply knowledge
              in novel contexts. If we cannot prove it works, we do not ship it.
            </p>
          </div>
          <div>
            <p>
              <strong>To the Learner.</strong> Our goal is not dependency but liberation.
              We aim to make better learners, not just better users of our tools. The
              highest success is when a learner no longer needs us.
            </p>
          </div>
          <div>
            <p>
              <strong>To Transparency.</strong> We will share what we learn. The science
              of learning belongs to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* The Work Ahead */}
      <section className="section">
        <h2 className="section-title">The Work Ahead</h2>
        <div className="prose-custom">
          <p>
            We are assembling a small, focused team of researchers and engineers to
            build the foundational models for AI-augmented learning. Our work sits at
            the intersection of cognitive science, neuroscience, and machine learning.
          </p>
          <p>
            If learning is the master skill—the skill that makes all other skills
            possible—then improving how humans learn is among the highest-leverage
            problems we can solve.
          </p>
          <p>
            <strong>We intend to solve it.</strong>
          </p>
        </div>
      </section>

      <div className="divider" />

      <p className="text-center text-[var(--color-text-muted)] italic">
        The architecture of efficient learning is not a mystery.
        <br />
        It is a blueprint waiting to be built.
      </p>
    </div>
  );
}
