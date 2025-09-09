# Overview

This is a professional cybersecurity portfolio website showcasing Juhin Akon, a cybersecurity specialist and ethical hacker. The application is built as a single-page application featuring multiple sections including hero, about, skills, portfolio, experience, and contact information. The site serves as both a professional showcase and a functional contact form system for potential clients and collaborators.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using React with TypeScript, utilizing a component-based architecture. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The UI framework is built on top of shadcn/ui components, which provides a consistent design system using Radix UI primitives styled with Tailwind CSS.

**Key Frontend Decisions:**
- **React + TypeScript**: Chosen for type safety and component reusability
- **Single Page Application**: Uses Wouter for lightweight client-side routing
- **Component Architecture**: Modular components for each section (hero, about, skills, etc.)
- **shadcn/ui + Radix**: Provides accessible, customizable UI components
- **Tailwind CSS**: Utility-first styling with custom CSS variables for theming
- **TanStack Query**: Handles server state management and API calls
- **React Hook Form + Zod**: Form handling with schema validation

## Backend Architecture
The server uses Express.js with TypeScript in ESM module format. The architecture follows a simple REST API pattern with modular route handling and in-memory storage for demonstration purposes.

**Key Backend Decisions:**
- **Express.js**: Lightweight and flexible web framework
- **TypeScript + ESM**: Modern JavaScript with type safety
- **In-Memory Storage**: Simple storage implementation for contact forms (easily replaceable)
- **Middleware Pattern**: Request logging and error handling
- **Development/Production Split**: Different configurations for Vite integration

## Data Storage
Currently uses an in-memory storage implementation for simplicity, but the system is designed with a storage interface that can be easily swapped for database implementations.

**Storage Architecture:**
- **Interface-based Design**: `IStorage` interface allows for easy storage backend switching
- **Memory Storage**: Current implementation using Map data structure
- **Database Ready**: Drizzle ORM configured for PostgreSQL with proper schema definitions
- **Schema Validation**: Shared Zod schemas between client and server

## Database Schema
The application includes a PostgreSQL schema definition using Drizzle ORM for the contacts table, supporting structured contact form submissions with proper data types and constraints.

## Form Handling & Validation
Uses a shared validation schema between frontend and backend to ensure data consistency. The contact form includes comprehensive validation for required fields and data format verification.

# External Dependencies

## UI & Styling
- **Radix UI**: Accessible component primitives for all UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional CSS class management

## State Management & API
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for both client and server

## Database & ORM
- **Drizzle ORM**: Type-safe database operations and migrations
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless
- **Drizzle Kit**: Database migration and schema management tools

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

## Routing & Navigation
- **Wouter**: Lightweight client-side routing library
- **Smooth scrolling**: Custom implementation for section navigation

## External Services
The application is designed to be easily integrated with:
- Email services for contact form notifications
- Analytics platforms for user tracking
- CDN services for optimized asset delivery