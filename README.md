# ui-test-apps

Test applications for [shadcn/ui](https://ui.shadcn.com) components.

## Apps

| App | Port | Description |
| --- | --- | --- |
| `next-radix` | 3100 | Next.js app with Radix UI primitives |
| `next-base` | 3200 | Next.js app with Base UI primitives |

## Getting Started

```bash
pnpm install
pnpm dev
```

## Commands

```bash
pnpm dev              # Run all apps
pnpm build            # Build all apps
pnpm lint             # Lint all apps

# Run a specific app
pnpm --filter next-radix dev
pnpm --filter next-base dev
```
