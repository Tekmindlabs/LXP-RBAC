# Admin Portal Development Guidelines and Task List

## I. Overview

This document outlines the development guidelines and task list for the admin portal of the AI-First Personalized Learning Platform. The admin portal will provide functionalities for user management, role management, permission system configuration, and overall platform administration.

## II. Development Guidelines

### A. Feature Implemented

1.  **Authentication:**
    *   Implement email/password authentication using NextAuth.js.
    *   Implement magic link authentication.
    *   Ensure proper session management.
    *   Protect API routes using authentication middleware.
    *   Implement multi-language support.
    *   Ensure GDPR compliance.
2.  **User Management:**
    *   Create user profiles with basic fields.
    *   Implement role assignment functionality.
    *   Implement password reset functionality.
    *   Implement email verification.
    *   Implement profile management.
3.  **Role Management:**
    *   Define pre-defined roles (Super Admin, Admin, Program Coordinator, Teacher, Student, Parent).
    *   Implement role hierarchy.
    *   Implement permission inheritance.
    *   Implement role assignment/removal.
4.  **Permission System:**
    *   Implement granular permissions.
    *   Group permissions by feature.
    *   Implement permission inheritance through roles.
    *   Implement permission checking middleware.
5.  **API Structure:**
    *   Use type-safe tRPC endpoints.
    *   Protect routes with authentication.
    *   Implement rate limiting.
    *   Implement consistent error handling.

### B. Tech Stack

*   **Framework**: Next.js 14 with App Router
*   **Language**: TypeScript
*   **API**: tRPC for end-to-end type safety
*   **Database**: PostgreSQL with Prisma ORM
*   **Authentication**: NextAuth.js
*   **Styling**: Tailwind CSS
*   **UI Components**: shadcn/ui
*   **Form Handling**: React Hook Form with Zod validation
*   **Database Queries**: Kysely for type-safe SQL
*   **Email**: Nodemailer for transactional emails

### C. Project Structure

```
/src
  /app                 # Next.js app router pages
  /components         # Reusable UI components
  /lib                # Utility functions and shared code
  /server            # Server-side code
    /api             # tRPC API routes
    /auth            # Authentication logic
    /db              # Database configuration
  /utils             # Helper functions
  /hooks             # Custom React hooks
  /types             # TypeScript type definitions
```

### D. Existing Implementation Considerations

*   The current implementation includes authentication, user management, role management, and a permission system.
*   The admin portal should build upon the existing implementation, ensuring consistency and reusability.
*   Utilize existing components and utilities where possible.
*   Ensure proper TypeScript typing throughout the application.
*   Implement comprehensive logging using a logging library.
*   Follow security best practices including input validation, authentication middleware, and proper environment variable usage.
*   Structure code for maximum reusability by creating shared utilities and common middleware.
*   Optimize performance through proper database indexing, query optimization, and caching strategies.
*   Maintain detailed documentation including JSDoc comments, API documentation, and README files.
*   Implement comprehensive test coverage using Jest/Supertest.
*   Use Prisma schema as the single source of truth for database models and relationships.
*   Follow the repository pattern with services layer.
*   Implement proper database transaction handling using Prisma.$transaction.
*   Structure API routes and controllers in a RESTful manner.

## III. Task List

1.  **Authentication Implementation:**
    *   Review and enhance existing NextAuth.js implementation.
    *   Implement magic link authentication.
    *   Ensure proper session management and security.
2.  **User Management Implementation:**
    *   Create UI components for user profiles.
    *   Implement role assignment functionality.
    *   Implement password reset functionality.
    *   Implement email verification.
    *   Implement profile management.
3.  **Role Management Implementation:**
    *   Define pre-defined roles in the database.
    *   Implement role hierarchy logic.
    *   Implement permission inheritance logic.
    *   Create UI components for role assignment/removal.
4.  **Permission System Implementation:**
    *   Define granular permissions in the database.
    *   Implement permission grouping by feature.
    *   Implement permission inheritance through roles.
    *   Implement permission checking middleware.
5.  **API Development:**
    *   Create tRPC endpoints for user management.
    *   Create tRPC endpoints for role management.
    *   Create tRPC endpoints for permission management.
    *   Protect API routes with authentication.
    *   Implement rate limiting.
    *   Implement consistent error handling.
6.  **UI Development:**
    *   Create dashboard layout for the admin portal.
    *   Create UI components for user management.
    *   Create UI components for role management.
    *   Create UI components for permission management.
7.  **Testing:**
    *   Write unit tests for all components and utilities.
    *   Write integration tests for API endpoints.
    *   Write e2e tests for the admin portal.
    
8.  **Documentation:**
    *   Document all components and utilities.
    *   Document all API endpoints.
    *   Update README files.
