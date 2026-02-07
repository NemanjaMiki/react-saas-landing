import Container from "../components/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <span className="text-xl font-bold">ReactSaaS</span>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-blue-500 transition">Features</a>
            <a href="#pricing" className="hover:text-blue-500 transition">Pricing</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
