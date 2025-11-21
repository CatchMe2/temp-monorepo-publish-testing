---
sidebar_position: 3
---

# Package B

`@temp-monorepo-publish-testing/package-b` is a utility package that provides helper functions.

## Installation

```bash
npm install @temp-monorepo-publish-testing/package-b
```

## Usage

### Importing

```typescript
import { hello } from '@temp-monorepo-publish-testing/package-b';
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
import { hello } from '@temp-monorepo-publish-testing/package-b';

console.log(hello('Charlie'));
// Output: "Hello, Charlie v2!"

console.log(hello('Diana'));
// Output: "Hello, Diana v2!"
```

## Features

- ✅ TypeScript support
- ✅ ESM module format
- ✅ Fully tested with Vitest
- ✅ Type definitions included

## Links

- [npm Package](https://www.npmjs.com/package/@temp-monorepo-publish-testing/package-b)
- [Source Code](https://github.com/CatchMe2/temp-monorepo-publish-testing/tree/main/packages/package-b)
