import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary" />
            <span className="text-lg font-bold md:text-xl">
              {SITE_CONFIG.name}
            </span>
          </div>
        </Link>

        <Button size="sm" className="md:size-default">
          Acesse Agora
        </Button>
      </div>
    </header>
  )
}