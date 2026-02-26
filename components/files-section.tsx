import { Download, FileText, FileArchive, FileCode, FileSpreadsheet } from "lucide-react"

const files = [
  {
    id: 1,
    title: "DirectX Runtime Installer",
    type: "Biblioteca de Sistema",
    size: "95 MB",
    format: "EXE",
    icon: FileCode,
  },
  {
    id: 2,
    title: "Visual C++ Redistributable Pack",
    type: "Biblioteca de Sistema",
    size: "78 MB",
    format: "EXE",
    icon: FileArchive,
  },
  {
    id: 3,
    title: ".NET Framework 4.8.1",
    type: "Framework",
    size: "115 MB",
    format: "EXE",
    icon: FileCode,
  },
  {
    id: 4,
    title: "Pack de Drivers Universal",
    type: "Drivers",
    size: "2.3 GB",
    format: "ISO",
    icon: FileArchive,
  },
  {
    id: 5,
    title: "Windows Activation Toolkit",
    type: "Utilitario",
    size: "12 MB",
    format: "ZIP",
    icon: FileText,
  },
  {
    id: 6,
    title: "Pack de Codecs Multimidia",
    type: "Codecs",
    size: "45 MB",
    format: "EXE",
    icon: FileSpreadsheet,
  },
  {
    id: 7,
    title: "Java Runtime Environment",
    type: "Runtime",
    size: "68 MB",
    format: "EXE",
    icon: FileCode,
  },
  {
    id: 8,
    title: "OpenAL Audio Library",
    type: "Biblioteca de Audio",
    size: "8 MB",
    format: "ZIP",
    icon: FileArchive,
  },
]

export function FilesSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground">
            Arquivos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Runtimes, drivers, bibliotecas e utilitarios essenciais
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {files.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FileRow({
  file,
}: {
  file: (typeof files)[0]
}) {
  const Icon = file.icon
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-muted-foreground/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="truncate font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
          {file.title}
        </h3>
        <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{file.type}</span>
          <span className="hidden sm:inline">{'·'}</span>
          <span className="hidden sm:inline">{file.format}</span>
        </div>
      </div>
      <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">{file.size}</span>
      <button className="flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80">
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Download</span>
      </button>
    </div>
  )
}
