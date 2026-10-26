[![CI](https://github.com/nodly/next-template/actions/workflows/ci.yml/badge.svg)](https://github.com/nodly/next-template/actions/workflows/ci.yml)

# Nodly / Next.js Template

A starter for building Next.js applications with the App Router. It includes Tailwind CSS, reusable UI components, and a Vitest setup for testing React components.

## Create an app

Use [`@nodly/create-app`](https://github.com/nodly/create-app) to create a project from this template:

```sh
pnpm create @nodly/app my-app
cd my-app
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available commands

| Command                    | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `pnpm dev`                 | Start the development server.                                    |
| `pnpm debug`               | Start the development server with the Node.js inspector enabled. |
| `pnpm lint`                | Run ESLint.                                                      |
| `pnpm check-types`         | Generate Next.js route types and run TypeScript checks.          |
| `pnpm test`                | Start Vitest in watch mode.                                      |
| `pnpm test run`            | Run the tests once.                                              |
| `pnpm test run --coverage` | Run the tests once and generate a coverage report.               |
| `pnpm build`               | Build the app for production.                                    |
| `pnpm start`               | Serve the production build. Run `pnpm build` first.              |

## Project layout

```text
src/
├── app/                  # App Router pages and layouts
│   └── examples/         # Example pages
├── components/
│   └── ui/               # Reusable UI components
├── lib/                  # Shared utilities
├── globals.css           # Tailwind and global styles
└── typeset.css           # Typography styles
```

The home page is in `src/app/page.tsx`. Update it and the metadata in `src/app/layout.tsx` to start shaping the app for your project. The typography example is available at `/examples/typeset-typography`.

## Testing

Tests use Vitest with a jsdom environment and React Testing Library. Add test files alongside the components or pages they cover using the `*.test.tsx` naming pattern.
