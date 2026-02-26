import { Download, Gamepad2, AppWindow, FileArchive } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          DroidX Center
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Bem-vindo ao DroidX Center, seu hub para downloads de jogos, aplicativos e arquivos para PC.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard icon={<Gamepad2 className="h-6 w-6" />} label="Jogos de PC" count="120+" />
          <StatCard icon={<AppWindow className="h-6 w-6" />} label="Aplicativos" count="85+" />
          <StatCard icon={<FileArchive className="h-6 w-6" />} label="Arquivos" count="200+" />
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Download className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Downloads rapidos e seguros</span>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  label,
  count,
}: {
  icon: React.ReactNode
  label: string
  count: string
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary">
      <div className="text-muted-foreground">{icon}</div>
      <span className="text-2xl font-bold text-foreground font-[family-name:var(--font-heading)]">{count}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
