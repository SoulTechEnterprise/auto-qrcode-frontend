"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { PRICING } from "@/lib/constants"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")
  const plan = PRICING[billingPeriod]

  return (
    <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Planos e Preços
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Escolha o plano ideal para o seu negócio.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-1 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-yellow-300 text-black shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ${
                billingPeriod === "annual"
                  ? "bg-yellow-300 text-black shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
            >
              Anual
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-md">
          <Card 
            key={billingPeriod}
            className="relative overflow-hidden border-2 border-yellow-300 bg-white p-8 shadow-2xl shadow-yellow-300/20 animate-in fade-in-0 zoom-in-95 duration-300 dark:bg-zinc-950"
          >
            <Badge className="absolute right-4 top-4 bg-yellow-300 text-xs font-bold uppercase text-black hover:bg-yellow-300">
              Popular
            </Badge>
            
            {billingPeriod === "annual" && (
              <Badge className="absolute left-4 top-4 animate-in slide-in-from-left-5 bg-green-500 px-4 py-1.5 text-xs font-bold uppercase text-white hover:bg-green-500">
                Economize 15%
              </Badge>
            )}

            <div className={`mb-6 ${billingPeriod === "annual" ? "mt-8" : ""}`}>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="animate-in fade-in-0 slide-in-from-bottom-3 bg-linear-to-br from-yellow-400 to-yellow-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent duration-500">
                  {plan.currency} {plan.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              {billingPeriod === "annual" && 'yearlyTotal' in plan && (
                <p className="text-sm text-muted-foreground">
                  {plan.currency} {plan.yearlyTotal.toFixed(2).replace('.', ',')} cobrado anualmente
                </p>
              )}
            </div>

            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3 animate-in fade-in-0 slide-in-from-left-3 duration-300" style={{ animationDelay: '100ms' }}>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-300">
                  <Check className="h-3 w-3 text-black" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium">QR Codes ilimitados</span>
              </li>
              <li className="flex items-center gap-3 animate-in fade-in-0 slide-in-from-left-3 duration-300" style={{ animationDelay: '200ms' }}>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-300">
                  <Check className="h-3 w-3 text-black" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium">Redirecionamentos ilimitados</span>
              </li>
              {plan.features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 animate-in fade-in-0 slide-in-from-left-3 duration-300"
                  style={{ animationDelay: `${300 + (index * 100)}ms` }}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-300">
                    <Check className="h-3 w-3 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="w-full h-12 text-base font-semibold shadow-lg shadow-yellow-300/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: '500ms' }}
            >
              Ir para o Checkout
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
