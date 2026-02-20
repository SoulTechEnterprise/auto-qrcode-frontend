import { Card } from "@/components/ui/card"
import { House, Utensils, Calendars, Hospital, School, Box } from "lucide-react"

const BENEFIT_ICONS = {
  1: House,
  2: Utensils,
  3: Calendars,
  4: Hospital,
  5: School,
  6: Box,
} as const

const BENEFITS = [
  {
    id: "1",
    title: "Mercado Imobiliário",
    description: "Reutilize placas de 'Vende-se' em diferentes imóveis. O interessado escaneia e vê as fotos atuais; se o imóvel vender, você redireciona o link para o próximo catálogo sem trocar a placa física.",
  },
  {
    id: "2",
    title: "Restaurantes e Bares",
    description: "Gerencie o fluxo do dia: direcione para o cardápio de almoço e, após as 18h, altere o destino para o menu de drinks ou para uma playlist exclusiva do Spotify no happy hour.",
  },
  {
    id: "3",
    title: "Eventos e Palestras",
    description: "Imprima o QR Code em crachás ou banners fixos. Durante o evento, mude o link para liberar o PDF da apresentação, um formulário de feedback ou o link de inscrição para o próximo lote.",
  },
  {
    id: "4",
    title: "Clínicas e Consultórios",
    description: "Facilite o check-in e a jornada do paciente. O QR Code na recepção pode levar ao agendamento via WhatsApp, à rede Wi-Fi ou a um vídeo educativo enquanto o paciente aguarda.",
  },
  {
    id: "5",
    title: "Instituições de Ensino",
    description: "Em materiais didáticos ou murais, o código pode levar ao portal do aluno. No período de férias, você altera o destino para a página de rematrícula ou cursos de verão.",
  },
  {
    id: "6",
    title: "E-commerce e Logística",
    description: "Insira o QR Code em embalagens ou cartões de agradecimento. Use para rastreio de pedido e, após a entrega, mude o link para um cupom de desconto exclusivo para a próxima compra.",
  }
] as const

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Por que usar o QRCode Inteligente?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Mais que economia, é inteligência aplicada no mercado
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
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
