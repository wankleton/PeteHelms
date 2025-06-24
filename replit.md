# replit.md

## Overview

This is a modern full-stack web application built with React frontend and Express.js backend. The application serves as a personal portfolio and business website for Pete Helms, a purpose-driven technology consultant. It features a professional landing page with sections for services, about information, and contact functionality, along with booking capabilities for strategy sessions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth animations and interactions
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Email**: Nodemailer for sending notifications
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Key Design Decisions
- **Monorepo Structure**: Shared schema and types between client and server
- **Professional Design**: Black and white color scheme with Poppins font
- **Mobile-First**: Responsive design with custom cursor interactions on desktop
- **Performance**: Lazy loading, code splitting, and optimized animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Key Components

### Frontend Components
- **Layout System**: MainLayout with responsive navigation
- **Section Components**: Modular sections for hero, about, services, and contact
- **UI Components**: Comprehensive design system with 40+ reusable components
- **Animation System**: Custom animation presets and magnetic/tilt effects
- **Interactive Elements**: Custom cursor, scroll indicators, and hover effects

### Backend Components
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **API Routes**: RESTful endpoints for bookings and contact forms
- **Email Service**: Automated email notifications for bookings and inquiries
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Users**: Basic user authentication (id, username, password)
- **Bookings**: Strategy session bookings (name, email, company, message, date, time)
- **Contacts**: Contact form submissions (name, email, subject, message)

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests with validation
3. **Business Logic**: Service layer processes data and sends notifications
4. **Data Storage**: Drizzle ORM manages database operations
5. **Email Notifications**: Nodemailer sends confirmation and notification emails

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- UI libraries (Radix UI, Framer Motion, TanStack Query)
- Styling (Tailwind CSS, PostCSS, Autoprefixer)
- Form handling (React Hook Form, Zod, Hookform Resolvers)
- Utilities (date-fns, clsx, class-variance-authority)

### Backend Dependencies
- Express.js framework and middleware
- Database (Drizzle ORM, @neondatabase/serverless)
- Email (Nodemailer)
- Session management (connect-pg-simple)
- Validation (Zod with Drizzle integration)

### Development Dependencies
- Build tools (Vite, esbuild, TypeScript)
- Development server with hot reload
- Replit-specific plugins for theme and debugging

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from `dist/public`

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built frontend
- **Database**: Requires `DATABASE_URL` environment variable
- **Email**: Uses Nodemailer configuration (SMTP settings needed)

### Replit Configuration
- **Modules**: Node.js 20, web server, PostgreSQL 16
- **Ports**: Development on 5000, production on 80
- **Build**: Automated build process with `npm run build`
- **Start**: Production server with `npm run start`

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```