---
sidebar_position: 1
---

# Getting Started

Welcome to the **Temp Monorepo Publish Testing** documentation!

This monorepo contains utility packages built with TypeScript and managed with [Changesets](https://github.com/changesets/changesets) for version management.

## Installation

Install packages using npm:

```bash
npm install @temp-monorepo-publish-testing/package-a
npm install @temp-monorepo-publish-testing/package-b
```

## Packages

This monorepo contains the following packages:

### [@temp-monorepo-publish-testing/package-a](./package-a)

Example package A with utility functions.

### [@temp-monorepo-publish-testing/package-b](./package-b)

Example package B with utility functions.

## Quick Start

```typescript
import { hello } from '@temp-monorepo-publish-testing/package-a';

console.log(hello('World')); // Output: "Hello, World v2!"
```

## Development

This monorepo uses:

- **[Turborepo](https://turbo.build/repo)** - High-performance build system
- **[Changesets](https://github.com/changesets/changesets)** - Version and changelog management
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vitest](https://vitest.dev/)** - Unit testing framework

## Contributing

Contributions are welcome! Please check the [GitHub repository](https://github.com/CatchMe2/temp-monorepo-publish-testing) for more information.
