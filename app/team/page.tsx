export const metadata = {
  title: "Team",
  description: "The people of Janett Labs, and how to work with us",
};

export default function TeamPage() {
  return (
    <div className="container-narrow py-16">
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-2">Team</h1>
        <p className="text-[var(--color-text-muted)]">
          A small lab, deliberately cross-disciplinary
        </p>
      </section>

      <div className="prose-custom">
        <p>
          The questions we work on do not belong to a single field. Deciding what
          a learner should see next is a cognitive science question, a
          measurement question, and a systems question at the same time, and it
          is usually answered badly when only one of the three is in the room.
        </p>
        <p>
          So the lab is built to hold all three: people who study how memory and
          understanding work, people who know what a defensible measurement looks
          like, and people who can build the instrument well enough to run the
          study on real learners.
        </p>
        <p>
          <strong>
            We value rigor over intuition, evidence over folklore, and results
            that survive a delay over results that look good on the day.
          </strong>
        </p>
      </div>

      <div className="divider" />

      <section>
        <h2 className="section-title">Working With Us</h2>
        <div className="prose-custom space-y-6">
          <div>
            <p>
              <strong>Researchers.</strong> If you have a hypothesis about
              instruction that has been hard to test at scale, the instrument may
              be the thing standing in the way. That is the part we are good at
              building.
            </p>
          </div>
          <div>
            <p>
              <strong>Teachers and institutions.</strong> Classrooms are where
              these questions are settled. We look for partners willing to run a
              real comparison and report it honestly, including when the new
              thing loses.
            </p>
          </div>
          <div>
            <p>
              <strong>Teams building learning software.</strong> Most product
              decisions in this space are made on intuition because evaluating
              them properly is expensive. Sometimes it is less expensive than it
              looks.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 p-6 border border-[var(--color-border)] rounded">
        <h2 className="text-lg font-medium mb-2">Join Us</h2>
        <p className="text-[var(--color-text-muted)]">
          We are looking for researchers and engineers who want to work on
          foundational questions about learning rather than ship the next
          feature. Cognitive science, measurement, machine learning, or the
          engineering that makes a study possible—if the work here looks like
          yours, reach out.
        </p>
      </div>
    </div>
  );
}
