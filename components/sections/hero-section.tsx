import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { QrCode } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-zinc-50 dark:to-zinc-900">
      <div className="container mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
  
          <div className="mb-6 inline-block rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
            Novidade no Brasil
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Nunca mais <span className="text-yellow-300">jogue fora</span> uma placa de{" "}
            <span className="whitespace-nowrap">&quot;Vende-se&quot;.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Atualize o link do imóvel sem trocar o adesivo. QRCodes dinâmicos feitos para corretores inteligentes.
          </p>

          <Button size="lg" className="mb-4 bg-yellow-300 text-black shadow-lg shadow-yellow-300/20 transition-all hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-105">
            <QrCode className="mr-2 h-5 w-5" />
            Criar meu primeiro QRCode
          </Button>

          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10 text-green-600">
              ✓
            </span>
            Teste grátis por 7 dias. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  )
}
