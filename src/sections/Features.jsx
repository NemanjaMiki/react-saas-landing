import { CheckCircle } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
        <div className="p-6 border rounded-lg">
          <CheckCircle className="mx-auto mb-4 text-blue-500" size={40} />
          <h3 className="font-semibold mb-2">Task Automation</h3>
          <p className="text-gray-600">Automate repetitive workflows and save time.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <CheckCircle className="mx-auto mb-4 text-blue-500" size={40} />
          <h3 className="font-semibold mb-2">Team Collaboration</h3>
          <p className="text-gray-600">Work together with your team in real-time.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <CheckCircle className="mx-auto mb-4 text-blue-500" size={40} />
          <h3 className="font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600">Track productivity and performance easily.</p>
        </div>
      </div>
    </section>
  )
}
