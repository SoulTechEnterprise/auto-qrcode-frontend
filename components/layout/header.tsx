import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2 md:gap-3">
            <Image 
              src="/logo-qrcode.png" 
              alt="Logo Placa QRCode" 
              width={64} 
              height={64}
              className="h-12 w-12 shrink-0 md:h-16 md:w-16"
            />
            <span className="text-lg font-bold md:text-2xl">
              {SITE_CONFIG.name}
            </span>
          </div>
        </Link>

        <Button size="sm" className="bg-yellow-300 text-black shadow-md transition-all hover:bg-yellow-400 hover:scale-105 hover:shadow-lg md:size-default">
          Acesse Agora
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}