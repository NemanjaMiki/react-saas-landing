import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <span className="font-bold text-lg">ReactSaaS</span>
          <nav className="flex gap-6 text-sm">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>
        </div>
        <div className="mt-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} ReactSaaS. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
