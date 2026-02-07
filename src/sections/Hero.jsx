import Container from "../components/Container";
import Button from "../components/Button";

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-32">
            <Container>
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
                        Build and launch your SaaS faster
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Modern React + Tailwind landing page designed to convert users into customers.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Button primary>Get Started</Button>
                        <Button>Live Demo</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
