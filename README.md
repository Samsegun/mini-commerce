# Mini-Commerce - E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 14, featuring product browsing, cart management, and checkout functionality.

## Project Overview

**What was built:**

-   A mini ecommerce store with filtering
-   Products are fetched, using Tanstack query, statically from public folder
-   Product IDs range from 1 - 10 e.g https://minicommerce-samsegun.vercel.app/7
-   Shopping cart with persistent state using zustand
-   A single form(shipping and payment details) checkout process
-   Responsive design across all devices
-   Error handling and loading states

**Key features:**

-   Browse products by category
-   Add/remove items from cart
-   View cart with quantity management
-   Complete checkout with form validation
-   Mobile-first responsive design

## Design Approach

**Layout Strategy:**

-   Clean, minimal design focusing on product presentation
-   Grid-based product listings with consistent spacing

**Color Scheme:**

-   Consistent blue and gray color theme across all components
-   A red colo

**Responsiveness:**

-   Mobile-first approach using Tailwind CSS
-   Flexible grid layouts that adapt to screen size

## Tools & Techniques

**Tech Stack:**

-   **Next.js 14** - App Router, Server Components, 'use client' for client components, dynamic routing
-   **React 18** - Hooks for reusable logic
-   **TypeScript** - Type safety for great development experience
-   **React Hook Form** - For form management and validation in checkout page
-   **Tailwind CSS** - For styling components

**State Management:**

-   Zustand - Persistent state management with rehydration handling for SSR compatibility
-   Custom hooks such as useCartTotals for cart and checkout operations
-   useState for local state management in client components

**Testing:**

-   **Playwright** - For end-to-end tests. Testing focuses on a user's flow from Home page -> Cart page -> Checkout page -> ThankYou page(only if checkout was successful)

**Performance:**

-   Optimized images with `next/image`
-   Lazy loading for images all images by utilizing 'placeholder' and 'blurDataUrl' attribues next js provides

## SEO Strategy

**Meta Tags:**

-   Static page titles, keywords, descriptions and metadatabase
-   Dynamic page titles and descriptions for /product/xx

## Error Handling Technique

**Error Boundaries:**

-   Implemented a general not-found file for pages that don't exist and also a specific not-found file for products not in store (to see this action; https://minicommerce-samsegun.vercel.app/11)
-   An ErrorUI if products failed to load using Tanstack-Query

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm run test:e2e (headlessly)
npm run test:e2e:headed (headed)
npm run test:e2e:ui (ui support)

# Build for production
npm run build
```

## Project Structure

```
Note: I differentiated routes and non-route folders by marking regular folders with an underscore(_)

app/
├── _components/              # reusable components
├── _hooks/       # reusable logic
├── _lib/             # utility functions and Typescript types definitions
├── _providers/           # Tanstack query provider
|── _store/           # contains zustand code for global state (useAppStore)

All other files and folders inside the app folder are routes.

```
