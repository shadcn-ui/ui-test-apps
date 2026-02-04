"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getPrevComponent, getNextComponent } from "@/lib/components"

export function ComponentPagination() {
  const pathname = usePathname()
  const componentName = pathname.split("/").pop() || ""

  const prev = getPrevComponent(componentName)
  const next = getNextComponent(componentName)

  if (!prev && !next) return null

  return (
    <div className="bg-background sticky top-0 z-50 flex items-center justify-between border-b px-4 py-4 text-sm">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground"
      >
        Home
      </Link>
      <div className="flex items-center gap-4">
        {prev ? (
          <Link
            href={`/${prev}`}
            className="text-muted-foreground hover:text-foreground"
          >
            ← {prev}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/${next}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {next} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
