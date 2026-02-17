import { Card } from "@/components/ui/card"
import { Wallet, LayoutDashboard, Zap, BarChart3 } from "lucide-react"
import { BENEFITS } from "@/lib/constants"

const BENEFIT_ICONS = {
  economia: Wallet,
  gestao: LayoutDashboard,
  atualizacao: Zap,
  analitica: BarChart3,
} as const

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Por que corretores de elite usam?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Mais que economia, é inteligência aplicada ao mercado imobiliário
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = BENEFIT_ICONS[benefit.id as keyof typeof BENEFIT_ICONS]
            return (
              <Card
                key={benefit.id}
                className="group border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-yellow-300/50 hover:shadow-lg hover:shadow-yellow-300/10 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-300/10 transition-all group-hover:bg-yellow-300/20 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-yellow-300" strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-zinc-400 md:text-base">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
