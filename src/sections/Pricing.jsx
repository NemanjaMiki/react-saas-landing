import Container from "../components/Container";
import pricingPlans from "../data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-slate-50">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Pricing Plans
        </h2>
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          Choose a plan that fits your business and scale with ease.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 flex flex-col justify-between shadow-sm transition hover:shadow-lg
                ${plan.popular ? "border-blue-500 bg-blue-50" : "bg-white"}`}
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-slate-900">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="before:content-['✓'] before:text-green-500 before:mr-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`mt-6 rounded-lg px-6 py-3 font-semibold transition
                ${plan.popular ? "bg-blue-500 text-white hover:bg-blue-600" : "border border-slate-900 hover:bg-slate-100"}`}>
                Select
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
