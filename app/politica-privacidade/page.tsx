import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE_CONFIG.name}`,
  description: "Política de Privacidade do serviço Placa QRCode - Como protegemos seus dados",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>

        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
          Política de Privacidade
        </h1>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            Última atualização: 17 de fevereiro de 2026
          </p>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">Política de Privacidade</h2>
            <p className="text-muted-foreground">
              A sua privacidade é importante para nós. É política do {SITE_CONFIG.name} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site {SITE_CONFIG.name}, e outros sites que possuímos e operamos.
            </p>
            <p className="text-muted-foreground mt-4">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="text-muted-foreground mt-4">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <p className="text-muted-foreground mt-4">
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            <p className="text-muted-foreground mt-4">
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <p className="text-muted-foreground mt-4">
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <p className="text-muted-foreground mt-4">
              O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">Cookies e Publicidade</h2>
            <p className="text-muted-foreground">
              O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
            </p>
            <p className="text-muted-foreground mt-4">
              Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
            </p>
            <p className="text-muted-foreground mt-4">
              Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
            </p>
            <p className="text-muted-foreground mt-4">
              Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">Compromisso do Usuário</h2>
            <p className="text-muted-foreground">
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o {SITE_CONFIG.name} oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <p className="text-muted-foreground mt-4">
              A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
            </p>
            <p className="text-muted-foreground mt-4">
              B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
            </p>
            <p className="text-muted-foreground mt-4">
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do {SITE_CONFIG.name}, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
            </p>
            <p className="text-muted-foreground mt-4">
              Se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
          </section>

          <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-muted-foreground">
              Ao utilizar o {SITE_CONFIG.name}, você reconhece que leu e compreendeu esta Política de Privacidade e concorda com o tratamento de seus dados conforme descrito.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Para mais informações sobre nossos termos de serviço, consulte nossa página de <Link href="/termos-de-uso" className="text-yellow-400 hover:text-yellow-300 underline">Termos de Uso</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
