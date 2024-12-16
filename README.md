# Role-Based Access Control (RBAC) Starter

A scalable and type-safe RBAC system built with modern web technologies.

## Features

### Authentication
- Email/password authentication using NextAuth.js
- Magic link authentication
- Session management
- Protected API routes
- Multi-language support
- GDPR compliance

### User Management
- User profiles with basic fields
- Role assignment
- Password reset functionality
- Email verification
- Profile management

### Role Management
- Pre-defined roles (Super Admin, Admin, Program Coordinator, Teacher, Student, Parent)
- Role hierarchy
- Permission inheritance
- Role assignment/removal

### Permission System
- Granular permissions
- Permission grouping by feature
- Permission inheritance through roles
- Permission checking middleware

### API Structure
- Type-safe tRPC endpoints
- Protected routes
- Rate limiting
- Error handling

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **API**: tRPC for end-to-end type safety
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Database Queries**: Kysely for type-safe SQL
- **Email**: Nodemailer for transactional emails

## Project Structure

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

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your environment variables
4. Initialize the database:
   ```bash
   npm run prisma:generate
   npm run prisma:push
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Test Credentials

| Role                | Email                     | Password        |
|--------------------|-----------------------------|-----------------|
| Super Admin        | superadmin@example.com     | superadmin123   |
| Admin              | admin@example.com          | admin123        |
| Program Coordinator| coordinator@example.com     | coordinator123  |
| Teacher            | teacher@example.com        | teacher123      |
| Student            | student@example.com        | student123      |
| Parent             | parent@example.com         | parent123       |

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/rbac-starter"

# Next Auth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Email (SMTP)
EMAIL_SERVER_HOST="smtp.example.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="user@example.com"
EMAIL_SERVER_PASSWORD="password"
EMAIL_FROM="noreply@example.com"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## License

MIT