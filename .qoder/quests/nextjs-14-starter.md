# Next.js 14 Starter Project Design

## Overview
This document outlines the design for a Next.js 14 starter project with TypeScript, Tailwind CSS, ESLint + Prettier, and Husky pre-commit hooks. The project will follow best practices for modern web development with a clean, scalable architecture.

## Technology Stack
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting with Next.js plugin
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit validation
- **lint-staged**: Run linters on git staged files

## Project Structure
The project will be created in the `./web` directory with the following structure:

```
web/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── hooks/
│   ├── styles/
│   ├── utils/
│   └── types/
├── .eslintrc.js
├── .prettierrc
├── .gitignore
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Configuration Details

### TypeScript Configuration
- Absolute imports with "@/" alias pointing to "./src"
- Strict type checking enabled
- Next.js specific TypeScript plugin integration
- Support for App Router types

### Tailwind CSS Configuration
- Custom theme extensions
- Proper content paths for Next.js App Router
- PostCSS integration
- Tailwind CSS plugin support

### ESLint & Prettier Setup
- Next.js ESLint plugin with recommended rules
- TypeScript and Next.js specific rules
- Prettier integration with ESLint
- Core Web Vitals rule set for performance

### Husky Pre-commit Hooks
- Code linting and formatting with lint-staged
- Type checking before commits
- Automated code quality enforcement
- Git commit message validation

### Husky Configuration
- Pre-commit hook running lint-staged
- Pre-push hook for additional checks

## Folder Structure Details

### Root Directory
- `web/`: Main Next.js application
- `web/public/`: Static assets served directly
- `web/src/`: Application source code

### Public Directory
- `public/images/`: Image assets
- `public/icons/`: Icon assets

### Source Directory
- `src/app/`: Next.js App Router directory with layout and page components
- `src/components/`: Reusable UI components
- `src/hooks/`: Custom React hooks
- `src/styles/`: Global styles and Tailwind imports
- `src/utils/`: Utility functions
- `src/types/`: TypeScript type definitions

## File Specifications

### next.config.ts
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false,
  },
  typedRoutes: true,  // Enable statically typed links
  experimental: {
    typedEnv: true,   // Enable type IntelliSense for environment variables
  }
}

export default nextConfig
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions can be added here
    },
  },
  plugins: [
    // Additional plugins can be added here
  ],
}

export default config
```

### postcss.config.mjs
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### .eslintrc.js
```javascript
module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'prettier'  // Make sure this is last to override other configs
  ],
  rules: {
    // Custom rule overrides can be added here
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_'
    }],
    'react-hooks/exhaustive-deps': 'warn'
  }
}
```

### .prettierrc
```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### package.json
```json
{
  "name": "nextjs-14-starter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "prepare": "husky"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "typescript": "5.1.3",
    "@types/node": "20.14.10",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.19",
    "postcss": "8.4.38",
    "tailwindcss": "3.4.4",
    "@tailwindcss/postcss": "4.0.0",
    "eslint": "8.57.0",
    "eslint-config-next": "14.2.3",
    "eslint-config-prettier": "9.1.0",
    "prettier": "3.3.2",
    "husky": "9.0.11",
    "lint-staged": "15.2.7"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### .gitignore
```
# Dependencies
node_modules

# Next.js
.next/
out/

# Development
.env*.local

# Production
.env.production.local

# IDE and editor files
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.sublime-project
*.sublime-workspace

# Operating system
.DS_Store
Thumbs.db

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Testing
coverage/

# Optional eslint cache
.eslintcache

# Output of 'npx next info'
.next-env.d.ts
*.d.ts
```

## Development Workflow
1. Initialize project with Next.js 14 using create-next-app
2. Configure TypeScript with absolute imports using "@/" alias
3. Set up Tailwind CSS with PostCSS integration
4. Integrate ESLint with Next.js and TypeScript plugins
5. Configure Prettier for code formatting
6. Set up Husky with lint-staged for pre-commit hooks
7. Create required directory structure
8. Add initial components and pages
9. Commit with message "init: next14 ts tailwind"

## Development Scripts
- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check for code issues
- `npm run lint:fix`: Run ESLint and automatically fix issues
- `npm run format`: Format all files with Prettier
- `npm run format:check`: Check if all files are formatted correctly
- `npm run type-check`: Run TypeScript type checking

## Code Quality Checks
- ESLint runs automatically on commit for staged files
- Prettier formatting is applied on commit for staged files
- TypeScript type checking is performed on commit
- All checks must pass before a commit is allowed

## Git Integration
- Husky pre-commit hooks for code quality
- lint-staged for running linters on staged files only
- Proper .gitignore configuration
- Initial commit with all starter files

## Best Practices

### Component Structure
- Use functional components with TypeScript interfaces
- Implement proper error boundaries for robustness
- Follow the container/presentational component pattern
- Use React hooks for state and side effects

### Styling
- Use Tailwind CSS utility classes for styling
- Create custom components for repeated UI patterns
- Use CSS modules for complex component-specific styles
- Implement a consistent naming convention for CSS classes

### TypeScript
- Define interfaces for component props
- Use TypeScript generics where appropriate
- Enable strict TypeScript compiler options
- Leverage TypeScript's type inference capabilities

### Performance
- Use React.memo() for optimizing component re-renders
- Implement code splitting for large components
- Optimize images with Next.js Image component
- Use dynamic imports for non-critical components

### Testing
- Write unit tests for utility functions
- Implement integration tests for critical components
- Use React Testing Library for component testing
- Set up end-to-end tests with Cypress or Playwright

## Conclusion

This Next.js 14 starter template provides a solid foundation for building modern web applications with TypeScript and Tailwind CSS. The configuration includes industry best practices for code quality, performance, and developer experience. With the integrated tooling for linting, formatting, and testing, developers can focus on building features rather than configuring tools.

The starter includes:
- A scalable folder structure
- Pre-configured TypeScript with absolute imports
- Tailwind CSS with PostCSS integration
- ESLint and Prettier for code quality
- Husky pre-commit hooks for automated code checks
- Ready-to-use development scripts
- Best practices for component structure and performance

## Implementation Steps
1. Create `web` directory in project root
2. Run `create-next-app` within `web` directory with required options
3. Configure TypeScript path aliases in `tsconfig.json`
4. Set up Tailwind CSS with PostCSS
5. Configure ESLint with Next.js and TypeScript plugins
6. Add Prettier configuration
7. Install and configure Husky with pre-commit hooks
8. Create directory structure: src/{app,components,hooks,styles,utils,types} and public/{images,icons}
9. Add initial layout and page components
10. Commit all files with message "init: next14 ts tailwind"

## Initial Files

### src/app/layout.tsx
```tsx
import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js 14 Starter',
  description: 'A Next.js 14 starter with TypeScript and Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### src/app/page.tsx
```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js 14!</h1>
      <p className="mt-4 text-lg">This is a starter template with TypeScript and Tailwind CSS.</p>
    </main>
  )
}
```

### src/styles/globals.css
```css
@import 'tailwindcss';

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: 222.2 84% 4.9%;
      --foreground: 210 40% 98%;
    }
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```