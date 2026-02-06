export default function Hero() {
    return (
        <section className="py-24 text-center max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
                Automate your team workflows
            </h2>
            <p className="text-gray-600 text-lg mb-8">
                FlowSync helps teams manage tasks, notifications and integrations in one place.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded">
                Start free trial
            </button>

            <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">Task Automation</h3>
                <p className="text-gray-600">
                    Automate repetitive workflows and save time.
                </p>
            </div>

            <div className="border-2 border-black p-8 rounded-xl">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-3xl my-4">$29</p>
                <button className="bg-black text-white w-full py-2">
                    Get Started
                </button>
            </div>

        </section>
    )
}
