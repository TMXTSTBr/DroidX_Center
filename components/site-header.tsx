"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface SiteHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "jogos", label: "Jogos de PC" },
  { id: "aplicativos", label: "Aplicativos" },
  { id: "arquivos", label: "Arquivos" },
]

export function SiteHeader({ activeTab, onTabChange }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <button
          onClick={() => onTabChange("inicio")}
          className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          DroidX Center
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id)
                setMobileMenuOpen(false)
              }}
              className={`block w-full rounded-md px-4 py-3 text-left text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
