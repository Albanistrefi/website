---
title: Building Secure Web Applications in 2025
description: Essential security practices for modern web development, including XSS prevention, CSRF protection, and secure authentication patterns.
publishDate: 2025-01-15
tags: [security, web-development, best-practices, authentication]
author: Developer
featured: true
draft: false
---

Security should be a top priority when building web applications. In this guide, we'll cover essential security practices that every developer should follow.

## 1. Prevent Cross-Site Scripting (XSS)

XSS attacks inject malicious scripts into your application. Here's how to prevent them:

### Always Sanitize HTML

When rendering user-generated content, always sanitize HTML:

```typescript
import DOMPurify from 'isomorphic-dompurify'

function renderUserContent(content: string) {
  // CRITICAL: Sanitize HTML before rendering
  const cleanHTML = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'a', 'strong', 'em', 'code', 'pre'],
    ALLOWED_ATTR: ['href', 'title']
  })

  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
}
```

### Content Security Policy (CSP)

Implement a strong CSP header:

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
    `.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 2. Protect Against CSRF

Cross-Site Request Forgery tricks users into executing unwanted actions.

### Use CSRF Tokens

```typescript
// Generate CSRF token
import { randomBytes } from 'crypto'

export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex')
}

// Validate CSRF token
export function validateCSRFToken(
  token: string,
  storedToken: string
): boolean {
  return token === storedToken
}
```

### SameSite Cookies

Set the `SameSite` attribute on cookies:

```typescript
export function setSecureCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; SameSite=Strict; Secure; HttpOnly`
}
```

## 3. Secure Authentication

### Password Hashing

Never store plain-text passwords. Use bcrypt:

```typescript
import bcrypt from 'bcrypt'

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}

// Verify password
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash)
}
```

### JWT Best Practices

When using JSON Web Tokens:

```typescript
import jwt from 'jsonwebtoken'

interface TokenPayload {
  userId: string
  email: string
}

// Create token with short expiration
export function createToken(payload: TokenPayload): string {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '15m', // Short-lived access token
    algorithm: 'HS256'
  })
}

// Verify token
export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload
  } catch (error) {
    return null
  }
}
```

### Implement Refresh Tokens

```typescript
interface RefreshTokenPayload {
  userId: string
}

export function createRefreshToken(payload: RefreshTokenPayload): string {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: '7d', // Longer-lived refresh token
    algorithm: 'HS256'
  })
}
```

## 4. Input Validation

Always validate and sanitize user input:

```typescript
import { z } from 'zod'

// Define schema
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
  name: z.string().min(2).max(100)
})

// Validate input
export function validateUserInput(input: unknown) {
  try {
    return userSchema.parse(input)
  } catch (error) {
    throw new Error('Invalid input')
  }
}
```

## 5. Rate Limiting

Prevent brute-force attacks with rate limiting:

```typescript
// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs
    })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}
```

## 6. Secure Database Queries

Prevent SQL injection with parameterized queries:

```typescript
// Bad - vulnerable to SQL injection
const userId = req.params.id
const query = `SELECT * FROM users WHERE id = ${userId}` // DON'T DO THIS

// Good - using parameterized queries
const userId = req.params.id
const query = 'SELECT * FROM users WHERE id = ?'
const result = await db.execute(query, [userId])
```

## 7. Environment Variables

Never commit secrets to version control:

```bash
# .env.local (add to .gitignore)
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
JWT_SECRET=your-secret-key-here
REFRESH_TOKEN_SECRET=your-refresh-secret-here
API_KEY=your-api-key-here
```

Load them securely:

```typescript
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined')
}

export const config = {
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL!,
  apiKey: process.env.API_KEY!,
}
```

## 8. Security Headers

Implement security headers in Next.js:

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')

  return response
}
```

## Security Checklist

- [ ] Sanitize all user input and HTML
- [ ] Implement Content Security Policy
- [ ] Use CSRF tokens for state-changing requests
- [ ] Hash passwords with bcrypt
- [ ] Use short-lived JWT tokens
- [ ] Implement rate limiting
- [ ] Use parameterized database queries
- [ ] Store secrets in environment variables
- [ ] Add security headers
- [ ] Enable HTTPS everywhere
- [ ] Keep dependencies updated
- [ ] Implement proper error handling
- [ ] Log security events
- [ ] Regular security audits

## Conclusion

Security is not a one-time task but an ongoing process. By following these practices, you'll significantly reduce the attack surface of your web applications.

Remember: **Defense in depth** - implement multiple layers of security rather than relying on a single measure.

Stay secure!
