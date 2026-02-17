import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.webp" 
              alt="Logo Auto QRCode" 
              width={48} 
              height={48}
              className="rounded-md"
            />
            <span className="text-lg font-bold md:text-xl">
              {SITE_CONFIG.name}
            </span>
          </div>
        </Link>

        <Button size="sm" className="md:size-default shadow-md transition-all hover:scale-105 hover:shadow-lg">
          Acesse Agora
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}