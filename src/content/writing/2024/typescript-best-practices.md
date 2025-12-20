---
title: TypeScript Best Practices for 2024
description: Learn essential TypeScript patterns and best practices to write safer, more maintainable code in your projects.
publishDate: 2024-08-22
tags: [typescript, javascript, programming, best-practices]
author: Developer
draft: false
---

TypeScript has become the standard for building robust JavaScript applications. Let's explore best practices that will help you write better TypeScript code.

## Use Strict Mode

Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
```

This catches potential bugs early and enforces type safety.

## Avoid the `any` Type

The `any` type defeats the purpose of TypeScript. Instead, use:

```typescript
// Bad
function processData(data: any) {
  return data.value
}

// Good
interface Data {
  value: string
}

function processData(data: Data) {
  return data.value
}

// Even better with generics
function processData<T extends { value: string }>(data: T) {
  return data.value
}
```

## Use Type Guards

Type guards help TypeScript understand your code better:

```typescript
interface Cat {
  meow(): void
}

interface Dog {
  bark(): void
}

type Animal = Cat | Dog

// Type guard
function isCat(animal: Animal): animal is Cat {
  return 'meow' in animal
}

function makeSound(animal: Animal) {
  if (isCat(animal)) {
    animal.meow() // TypeScript knows this is a Cat
  } else {
    animal.bark() // TypeScript knows this is a Dog
  }
}
```

## Leverage Union Types

Union types are powerful for modeling data:

```typescript
type Status = 'loading' | 'success' | 'error'

interface State {
  status: Status
  data?: any
  error?: Error
}

// Better with discriminated unions
type State =
  | { status: 'loading' }
  | { status: 'success'; data: any }
  | { status: 'error'; error: Error }

function handleState(state: State) {
  switch (state.status) {
    case 'loading':
      return 'Loading...'
    case 'success':
      return state.data // TypeScript knows data exists
    case 'error':
      return state.error.message // TypeScript knows error exists
  }
}
```

## Use `unknown` Instead of `any`

When you don't know the type, use `unknown`:

```typescript
// Bad
function parseJSON(json: string): any {
  return JSON.parse(json)
}

// Good
function parseJSON(json: string): unknown {
  return JSON.parse(json)
}

// Must validate before use
const result = parseJSON('{"name": "John"}')
if (typeof result === 'object' && result !== null && 'name' in result) {
  console.log(result.name)
}
```

## Utility Types

TypeScript provides powerful utility types:

```typescript
interface User {
  id: number
  name: string
  email: string
  password: string
}

// Pick specific properties
type UserPublic = Pick<User, 'id' | 'name' | 'email'>

// Omit specific properties
type UserWithoutPassword = Omit<User, 'password'>

// Make all properties optional
type PartialUser = Partial<User>

// Make all properties required
type RequiredUser = Required<User>

// Make all properties readonly
type ReadonlyUser = Readonly<User>
```

## Generic Constraints

Use constraints to make generics more specific:

```typescript
// Without constraints
function getProperty<T>(obj: T, key: string) {
  return obj[key] // Error: Type 'string' can't be used to index type 'T'
}

// With constraints
function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key] // TypeScript knows this is safe
}

const user = { name: 'John', age: 30 }
const name = getProperty(user, 'name') // Type: string | number
```

## Async/Await with Types

Properly type async functions:

```typescript
interface User {
  id: number
  name: string
}

// Return type is Promise<User>
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}

// Handle errors
async function fetchUserSafe(id: number): Promise<User | null> {
  try {
    const response = await fetch(`/api/users/${id}`)
    if (!response.ok) {
      return null
    }
    return response.json()
  } catch (error) {
    console.error('Failed to fetch user:', error)
    return null
  }
}
```

## Const Assertions

Use const assertions for literal types:

```typescript
// Without const assertion
const colors = ['red', 'green', 'blue'] // Type: string[]

// With const assertion
const colors = ['red', 'green', 'blue'] as const
// Type: readonly ["red", "green", "blue"]

type Color = typeof colors[number] // Type: "red" | "green" | "blue"
```

## Conclusion

TypeScript is a powerful tool when used correctly. These best practices will help you:

- Write safer, more maintainable code
- Catch bugs at compile time
- Improve code documentation
- Enhance IDE support and autocomplete

Remember: TypeScript is there to help you, not restrict you. Use it to make your code more robust and easier to understand.
