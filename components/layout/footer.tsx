import Link from "next/link"
import { SITE_CONFIG, CONTACT_LINKS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo e Nome */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary" />
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={CONTACT_LINKS.termsOfUse}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href={CONTACT_LINKS.privacyPolicy}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={CONTACT_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}