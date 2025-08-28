# Overview

This is a premium portfolio website built as a full-stack application showcasing modern web development practices. The project demonstrates a sophisticated personal brand with luxury aesthetics, featuring an interactive portfolio with 3D elements, glass morphism design, and smooth animations. The application is structured as a monorepo with separate client and server architectures, built using React and Express with TypeScript throughout.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side application is built with React 18 and TypeScript, utilizing Vite as the build tool for optimal development experience and fast hot module replacement. The architecture follows a component-based design with a clean separation of concerns:

- **UI Framework**: React with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom luxury color scheme and glass morphism effects
- **Component Library**: Radix UI primitives with shadcn/ui components for accessible, customizable UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **3D Graphics**: Custom Canvas-based animations and particle systems for interactive visual effects

The frontend implements a sophisticated design system with luxury aesthetics, featuring gold and platinum color schemes, glass morphism effects, and smooth animations. The application is fully responsive and includes advanced features like cursor tracking, intersection observers for scroll animations, and particle systems.

## Backend Architecture

The server-side follows a minimal Express.js architecture with TypeScript, designed for scalability and maintainability:

- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot reload capability with tsx for TypeScript execution
- **Production**: Compiled JavaScript output with esbuild for optimal performance

The backend implements a clean storage interface pattern, allowing for easy switching between different storage implementations (currently includes in-memory storage for development and database storage for production).

## Data Storage

- **Primary Database**: PostgreSQL for production data persistence
- **ORM**: Drizzle ORM with schema-first approach and automatic type generation
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon serverless PostgreSQL for cloud deployment
- **Development**: In-memory storage implementation for rapid development and testing

The database schema is defined using Drizzle's schema definition with automatic TypeScript type generation, ensuring type safety across the entire application stack.

## Build and Development

The project uses a sophisticated build pipeline optimized for both development and production:

- **Development**: Vite dev server with HMR for the frontend, tsx for backend hot reload
- **Production**: Vite build for frontend static assets, esbuild for backend compilation
- **Type Checking**: TypeScript compiler for comprehensive type checking across the monorepo
- **Asset Handling**: Vite handles all frontend assets with optimized bundling and code splitting

The build system supports both development and production environments with appropriate optimizations for each context.

# External Dependencies

## UI and Design
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom luxury design tokens
- **Lucide React**: Modern icon library for consistent iconography
- **PostCSS/Autoprefixer**: CSS processing and vendor prefixing

## Development and Build Tools
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Static type checking and enhanced developer experience
- **esbuild**: Fast JavaScript bundler for backend compilation
- **tsx**: TypeScript execution engine for development

## Backend Infrastructure
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database platform
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## State Management and Data Fetching
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation

## Additional Libraries
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Secure, URL-friendly unique string ID generator
- **wouter**: Minimalist routing library for React
- **embla-carousel**: Smooth carousel library for React
