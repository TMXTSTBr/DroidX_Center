import Image from "next/image"
import { Download } from "lucide-react"

const games = [
  {
    id: 1,
    title: "Baldis Basic",
    description: "Fuja de Um Professor Maluco",
    size: "42Mb",
    image: "/images/baldis.jpg",
  },
  {
]:

export function GamesSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground">
            Jogos de PC
          </h2>
          <p className="mt-2 text-muted-foreground">
            Os melhores jogos para download direto
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GameCard({
  game,
}: {
  game: (typeof games)[0]
}) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-muted-foreground/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
          {game.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {game.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{game.size}</span>
          <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80">
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  )
}
