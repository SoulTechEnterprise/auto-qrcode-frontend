import { Printer, Link, Recycle, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HOW_IT_WORKS_STEPS } from "@/lib/constants"

const STEP_ICONS = {
  1: Printer,
  2: Link,
  3: Recycle,
} as const

export function HowItWorksSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Como Funciona
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Em 3 passos simples, você economiza tempo e dinheiro com suas placas imobiliárias
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = STEP_ICONS[step.number as keyof typeof STEP_ICONS]
            return (
              <div key={step.number} className="relative text-center">
                {step.number < 3 && (
                  <div className="absolute left-[60%] top-10 hidden h-0.5 w-[80%] bg-linear-to-r from-yellow-300 to-yellow-300/20 md:block" />
                )}
                
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/50 transition-all hover:scale-110">
                      <Icon className="h-9 w-9 text-black" strokeWidth={2} />
                    </div>
                    <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-bold text-yellow-300 shadow-md">
                      {step.number}
                    </div>
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Quero economizar com impressões
            <PiggyBank className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
