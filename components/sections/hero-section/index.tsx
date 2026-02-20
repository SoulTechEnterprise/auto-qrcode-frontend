import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/app/layout"
import { QrCode } from "lucide-react"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-zinc-50 dark:to-zinc-900">
      <div className="container mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-block rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
            Novidade no Brasil
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Nunca mais <span className="rounded bg-yellow-300 px-4 text-black">jogue dinheiro</span> fora reimprimindo materiais
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Mude o destino do seu link quantas vezes quiser sem precisar trocar o QRCode físico. A solução definitiva de QRCodes dinâmicos para o seu negócio.
          </p>

          <Button asChild size="lg" className="mb-4 bg-yellow-300 text-black shadow-lg shadow-yellow-300/20 transition-all hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-105">
            <Link href="https://pay.cakto.com.br/3835bg9">
              <QrCode className="mr-2 h-5 w-5" />
              Criar meu primeiro QRCode
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
