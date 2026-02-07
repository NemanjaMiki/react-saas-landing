import Container from "../components/Container";
import features from "../data/features";

export default function Features() {
  return (
    <section id="features" className="py-32 bg-white">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Features
        </h2>
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          Everything you need to launch and grow your SaaS business.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-xl border p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
