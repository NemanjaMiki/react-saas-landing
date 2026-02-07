import Container from "../components/Container"

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-32">
            <Container>
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
                        Build and launch your SaaS faster
                    </h1>

                    <p className="mt-6 text-lg text-slate-600">
                        Modern React + Tailwind landing page designed to convert users into customers.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="rounded-lg bg-slate-900 px-6 py-3 text-white font-semibold">
                            Get started
                        </button>
                        <button className="rounded-lg border px-6 py-3 font-semibold">
                            Live demo
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
