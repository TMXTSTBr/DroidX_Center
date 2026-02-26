import Image from "next/image"
import { Download } from "lucide-react"

const apps = [
  {
    id: 1,
    title: "VideoForge Pro",
    description: "Editor de video profissional com timeline avancada",
    size: "890 MB",
    version: "v4.2.1",
    image: "/images/app-1.jpg",
  },
  {
    id: 2,
    title: "SoundWave Studio",
    description: "Producao musical completa com plugins integrados",
    size: "1.2 GB",
    version: "v3.8.0",
    image: "/images/app-2.jpg",
  },
  {
    id: 3,
    title: "CodeBridge IDE",
    description: "Ambiente de desenvolvimento com IA integrada",
    size: "450 MB",
    version: "v2.1.5",
    image: "/images/app-3.jpg",
  },
  {
    id: 4,
    title: "PixelCraft Design",
    description: "Design grafico e edicao de fotos avancada",
    size: "720 MB",
    version: "v5.0.3",
    image: "/images/app-4.jpg",
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
