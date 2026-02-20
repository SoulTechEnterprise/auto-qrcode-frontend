import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SITE_CONFIG } from "@/app/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Termos de Uso | ${SITE_CONFIG.name}`,
  description: "Termos de Uso do serviço Placa QRCode - QRCodes dinâmicos para imóveis",
}

export default function TermsOfUsePage() {
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
          Termos de Uso
        </h1>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            Última atualização: 17 de fevereiro de 2026
          </p>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar ao site {SITE_CONFIG.name}, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Uso de Licença</h2>
            <p className="text-muted-foreground">
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site {SITE_CONFIG.name}, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>modificar ou copiar os materiais;</li>
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site {SITE_CONFIG.name};</li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>transferir os materiais para outra pessoa ou &apos;espelhe&apos; os materiais em qualquer outro servidor.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por {SITE_CONFIG.name} a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Isenção de responsabilidade</h2>
            <p className="text-muted-foreground">
              Os materiais no site da {SITE_CONFIG.name} são fornecidos &apos;como estão&apos;. {SITE_CONFIG.name} não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
            <p className="text-muted-foreground mt-4">
              Além disso, o {SITE_CONFIG.name} não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Limitações</h2>
            <p className="text-muted-foreground">
              Em nenhum caso o {SITE_CONFIG.name} ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em {SITE_CONFIG.name}, mesmo que {SITE_CONFIG.name} ou um representante autorizado da {SITE_CONFIG.name} tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Precisão dos materiais</h2>
            <p className="text-muted-foreground">
              Os materiais exibidos no site da {SITE_CONFIG.name} podem incluir erros técnicos, tipográficos ou fotográficos. {SITE_CONFIG.name} não garante que qualquer material em seu site seja preciso, completo ou atual. {SITE_CONFIG.name} pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, {SITE_CONFIG.name} não se compromete a atualizar os materiais.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Links</h2>
            <p className="text-muted-foreground">
              O {SITE_CONFIG.name} não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por {SITE_CONFIG.name} do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">7. Modificações</h2>
            <p className="text-muted-foreground">
              O {SITE_CONFIG.name} pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">8. Lei aplicável</h2>
            <p className="text-muted-foreground">
              Estes termos e condições são regidos e interpretados de acordo com as leis do {SITE_CONFIG.name} e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </section>

          <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-muted-foreground">
              Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
