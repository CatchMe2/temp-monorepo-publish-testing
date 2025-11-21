---
sidebar_position: 2
---

# Package A

`@temp-monorepo-publish-testing/package-a` is a utility package that provides helper functions.

## Installation

```bash
npm install @temp-monorepo-publish-testing/package-a
```

## Usage

### Importing

```typescript
import { hello } from '@temp-monorepo-publish-testing/package-a';
```

### API Reference

#### `hello(name: string): string`

Returns a greeting message with the provided name.

**Parameters:**
- `name` (string): The name to include in the greeting

**Returns:**
- (string): A formatted greeting message

**Example:**

```typescript
import { hello } from '@temp-monorepo-publish-testing/package-a';

console.log(hello('Alice'));
// Output: "Hello, Alice v2!"

console.log(hello('Bob'));
// Output: "Hello, Bob v2!"
```

## Features

- ✅ TypeScript support
- ✅ ESM module format
- ✅ Fully tested with Vitest
- ✅ Type definitions included

## Links

- [npm Package](https://www.npmjs.com/package/@temp-monorepo-publish-testing/package-a)
- [Source Code](https://github.com/CatchMe2/temp-monorepo-publish-testing/tree/main/packages/package-a)
