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
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4">
          <title>Radix UI</title>
          <path fill="currentColor" d="M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z" />
        </svg>
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
