import Container from "../components/Container";
import pricingPlans from "../data/pricing";
import Button from "../components/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-slate-50 animate-fade">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Pricing Plans
        </h2>
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          Choose a plan that fits your business and scale with ease.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl border p-6 flex flex-col justify-between shadow-sm transition hover:shadow-lg animate-fade`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {plan.price}
                </p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="before:content-['✓'] before:text-green-500 before:mr-2"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button primary={plan.popular}>Select</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
