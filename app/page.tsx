import Link from "next/link";

export default function Home() {
  return (
    <div className="container-narrow py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-2">Janett Labs</h1>
        <p className="text-[var(--color-text-muted)]">
          A research lab studying how software changes what is possible in
          learning and teaching
        </p>
      </section>

      <div className="divider" />

      {/* The Premise */}
      <section className="section">
        <h2 className="section-title">The Premise</h2>
        <div className="prose-custom">
          <p>
            A century of cognitive science has produced a reliable account of how
            people learn. Retrieval strengthens memory more than review. Spacing
            defeats forgetting. Difficulty, properly calibrated, is not an
            obstacle to learning—it is the mechanism of it.
          </p>
          <p>
            Teaching has findings of its own. Worked examples before independent
            problem solving. Feedback timed to the moment it can still change
            something. Explanation that forces the learner, not the instructor,
            to do the cognitive work.
          </p>
          <p>
            <strong>
              Very little of this is contested. Very little of it is built.
            </strong>
          </p>
        </div>
      </section>

      {/* The Gap */}
      <section className="section">
        <h2 className="section-title">The Gap</h2>
        <div className="prose-custom">
          <p>
            Most learning software is designed around convenience and
            engagement. It is optimized for the feeling of productivity rather
            than the fact of it. Learners still highlight, re-read, and cram, and
            the tools they are given rarely interrupt that. Teachers are handed
            systems that digitize the lecture rather than change what the lecture
            can do.
          </p>
          <p>
            This is not a failure of intelligence or effort. It is a failure of
            translation. The distance between what the science knows and what the
            software does is the space this lab works in.
          </p>
        </div>
      </section>

      {/* Why Software */}
      <section className="section">
        <h2 className="section-title">Why Software</h2>
        <div className="prose-custom">
          <p>
            Software is the first medium that can act on this science at scale.
            It can time a review to the hour it matters, vary a problem so the
            surface changes but the structure does not, notice a misconception
            from a pattern of errors, and hold a conversation about it. Language
            models widen that range considerably.
          </p>
          <p>
            But capability is not evidence. A system that <em>can</em> do these
            things is not a system that is <em>known</em> to help. Most of what is
            currently being built has never been tested against a durable
            outcome.
          </p>
          <p>
            The open question is no longer whether software can teach. It is
            which decisions actually produce learning that lasts—and how we would
            know.
          </p>
        </div>
      </section>

      {/* What We Study */}
      <section className="section">
        <h2 className="section-title">What We Study</h2>
        <div className="prose-custom">
          <p>Four questions organize the lab.</p>
        </div>
        <ol className="mt-6 ml-5 list-decimal space-y-4 leading-relaxed text-[var(--color-text-muted)]">
          <li>
            <strong className="text-[var(--color-text)] font-medium">
              Sequencing.
            </strong>{" "}
            What should a learner see, when, and in what order? Scheduling and
            selection are decisions software makes constantly and justifies
            rarely.
          </li>
          <li>
            <strong className="text-[var(--color-text)] font-medium">
              Knowledge modeling.
            </strong>{" "}
            What does a system actually know about a learner, and how much of
            that belief survives contact with the next question?
          </li>
          <li>
            <strong className="text-[var(--color-text)] font-medium">
              Instructional dialogue.
            </strong>{" "}
            What does a conversation do that an explanation cannot? Tutoring
            works; the reasons are less settled than the effect.
          </li>
          <li>
            <strong className="text-[var(--color-text)] font-medium">
              Evidence.
            </strong>{" "}
            What counts as proof that learning happened? Most metrics in this
            field measure activity, not acquisition.
          </li>
        </ol>
        <p className="mt-6">
          <Link
            href="/research"
            className="text-sm underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Read the research agenda
          </Link>
        </p>
      </section>

      {/* How We Work */}
      <section className="section">
        <h2 className="section-title">How We Work</h2>
        <div className="prose-custom space-y-6">
          <div>
            <p>
              <strong>We build instruments, not products.</strong> Software is
              how we run the experiment. A system exists so that a question can
              be asked precisely, under conditions we control.
            </p>
          </div>
          <div>
            <p>
              <strong>We test against durable outcomes.</strong> Retention weeks
              after the session ends. Transfer to problems that do not resemble
              the ones practiced. Anything measurable in a single sitting is a
              proxy, and we treat it as one.
            </p>
          </div>
          <div>
            <p>
              <strong>We publish what fails.</strong> A negative result about a
              method thousands of tools already ship is worth more than another
              demonstration that something can be built.
            </p>
          </div>
          <div>
            <p>
              <strong>We release the artifacts.</strong> Code, task materials,
              and data where consent allows, so that findings can be checked
              rather than believed.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section">
        <h2 className="section-title">Commitments</h2>
        <div className="prose-custom space-y-6">
          <div>
            <p>
              <strong>To evidence.</strong> We reject neuromyths, learning
              styles, and pedagogical folklore. Every claim we make should be
              traceable to something someone measured.
            </p>
          </div>
          <div>
            <p>
              <strong>To measurement.</strong> Not engagement, not completion,
              not time on task—retention, transfer, and the ability to use
              knowledge in a context it was not learned in.
            </p>
          </div>
          <div>
            <p>
              <strong>To the learner.</strong> The aim is capability, not
              dependency. Software that makes people better learners is worth
              more than software that makes them frequent users.
            </p>
          </div>
          <div>
            <p>
              <strong>To openness.</strong> Methods, materials, and results in
              public. The science of learning belongs to everyone.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <p className="text-center text-[var(--color-text-muted)] italic">
        The architecture of efficient learning is not a mystery.
        <br />
        What remains is to build it—and to check.
      </p>
    </div>
  );
}
