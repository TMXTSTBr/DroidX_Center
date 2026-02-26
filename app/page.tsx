"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { GamesSection } from "@/components/games-section"
import { AppsSection } from "@/components/apps-selection"
import { FilesSection } from "@/components/files-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState("inicio")

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="pt-16">
        {activeTab === "inicio" && (
          <>
            <HeroSection />
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px bg-border" />
            </div>
            <GamesSection />
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px bg-border" />
            </div>
            <AppsSection />
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px bg-border" />
            </div>
            <FilesSection />
          </>
        )}

        {activeTab === "jogos" && <GamesSection />}
        {activeTab === "aplicativos" && <AppsSection />}
        {activeTab === "arquivos" && <FilesSection />}
      </main>

      <SiteFooter />
    </div>
  )
}
