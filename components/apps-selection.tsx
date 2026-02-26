import Image from "next/image"
import { Download } from "lucide-react"

const apps = [
  {
    id: 1,
    title: "Winlator Ludashi",
    description: "Emulador de PC Baseado em Wine",
    size: "495 MB",
    version: "v2.8.3",
    image: "https://i.ibb.co/LdR58VTd/Winlator-Windows-x86-x64-PC-Emulator-for-Android-2003590736.png",
    downloadUrl: "https://github.com/StevenMXZ/Winlator-Ludashi/releases/"
  },
  {
    id: 2,
    title: "Gamehub",
    description: "Emulador de PC com mais opções de desempenho incluindo steam",
    size: "186 MB",
    version: "V5",
    image: "https://i.ibb.co/spyFxzxM/IMG-20250819-145541.jpg",
    downloadUrl: "https://gamehub.xiaoji.com/"
  },
  {
    id: 3,
    title: "VoidX",
    description: "Aplicativo Para otimizar seu dispositivo usando adb",
    size: "5MB",
    version: "v1.3",
    image: "https://i.ibb.co/RTNTz3mP/In-Shot-20260105-184553111.jpg",
    downloadUrl: "https://github.com/YTDvidPojavBr/VoidX/releases/tag/1.3"
  },
]

export function AppsSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground">
            Aplicativos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Ferramentas essenciais para produtividade e criacao
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AppCard({
  app,
}: {
  app: (typeof apps)[0]
}) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-muted-foreground/30">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
            {app.title}
          </h3>
          <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
            {app.version}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {app.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{app.size}</span>
          <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80">
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  )
}
