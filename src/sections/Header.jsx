import Container from "../components/Container"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <span className="text-xl font-bold">ReactSaaS</span>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
