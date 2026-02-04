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
        <svg width="17" height="24" viewBox="0 0 17 24" className="size-4">
          <path fill="currentColor" d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z" />
          <path fill="currentColor" d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z" />
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
