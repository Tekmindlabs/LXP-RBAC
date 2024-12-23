# AI-First Personalized Learning Platform: Product Features

This document outlines the comprehensive features of an AI-first personalized learning platform designed for students, educators, program coordinators, and administrators. The platform leverages intelligent AI agents to deliver customized and emotionally aware learning experiences, incorporating gamification and structured academic management.

## Core Concept: Agent-Based Learning Ecosystem

The platform utilizes a network of specialized AI Agents, each with distinct roles and capabilities, working collaboratively to provide a holistic and engaging learning journey, rather than relying on a single monolithic AI.

## I. Platform Structure and User Roles:

The platform is structured hierarchically with Programs containing Courses, and Courses further divided into Sessions to manage multiple student batches.

**A. Student Portal:**

* **Personalized Dashboard:**
    * Emotionally aware welcome message.
    * Learning path progress visualization within enrolled Courses and Programs.
    * Upcoming activities (scheduler integration, including Session-specific events).
    * AI agent recommendations tailored to individual Course progress.
    * Goal tracking display for Courses and overall Program.
    * Recent activity summary across enrolled Courses.
    * Agent interaction panel.
    * **Leaderboard Visibility:** View personal ranking and overall leaderboard for enrolled Courses and potentially Programs.
* **Program Catalog & Enrollment:**
    * Browseable catalog of Programs with detailed descriptions and academic calendars.
    * Easy enrollment process into Programs.
* **Course Access:**
    * Clear organization of enrolled Courses within the Program.
    * Visual progress indicators for each Course.
    * Information about associated Sessions and batch details.
* **Session Management:**
    * View specific Session details (schedule, enrolled students, educator).
    * Access Session-specific activities and announcements.
* **AI Tutor Interface:**
    * Dedicated chat interface for interacting with AI agents within the context of a specific Course or Session.
    * Agent selection capability tailored to the learning objective.
    * Contextual AI assistance.
    * Optional emotion tracking visualization (with consent).
* **Activity Hub:**
    * Adaptive quizzes within Courses.
    * Personalized flashcards based on Course content.
    * Interactive readings with examples and AI assistance relevant to the Course.
    * Assignment submission and feedback mechanisms for Course activities.
    * **Gamified Activities:** Access to challenges, simulations, and other interactive elements designed to earn points and badges within Courses.
* **Personalized Learning Path:**
    * AI-generated initial learning path within each Course.
    * Student customization options for Course learning paths.
    * Dynamic adjustments based on performance and engagement within the Course.
* **Scheduler & Goal Setting:**
    * Integration with calendars for scheduling Course-related study sessions and Session attendance.
    * Ability to set learning goals for individual Courses and the overall Program.
    * AI-assisted goal setting suggestions specific to Course content.
* **Program Academic Calendar:**
    * View the academic calendar for the enrolled Program, including key dates, holidays, and deadlines.
* **Progress Tracking & Analytics:**
    * Course-level progress visualization.
    * Skill mastery tracking within Courses.
    * Performance history for Course activities.
* **Communication Tools:**
    * Direct messaging with educators within specific Courses.
    * Optional forum/community features for each Course.
* **Personalized Recommendations:**
    * Content recommendations relevant to the current Course.
    * Agent recommendations for tasks within the Course.
* **Leaderboards & Badges:**
    * View leaderboards for Courses and potentially Programs.
    * Track earned badges and points from gamified activities.

**B. Educator Portal:**

* **Dashboard:**
    * Overview of enrolled students in assigned Courses and Sessions.
    * Student progress summary within their Courses and Sessions.
    * Communication hub for student messages within their Courses.
    * Quick access to content authoring tools for their Courses.
* **Course & Session Management:**
    * Create and manage Courses within assigned Programs.
    * Create and manage Sessions within their Courses, including scheduling and student assignment.
* **Content Authoring Tools:**
    * Interactive reading creation with embedded examples and AI assistance prompts for their Courses.
    * Quiz and flashcard builder for Course content.
    * Resource upload functionality for Course materials.
    * Subject Knowledge Base Management (RAG-based) for their Courses:
        * Interface to upload and manage documents for the vector database relevant to their Courses.
        * Tools to organize and tag knowledge base content.
        * Analytics on knowledge base access within their Courses.
* **Student Management:**
    * View individual student profiles within their Courses (progress, performance, interactions).
    * Communication with students within their Courses (direct messages, feedback).
    * Intervention tools (adjust learning paths, recommend activities) for students in their Courses.
* **Progress Monitoring & Analytics:**
    * Detailed student performance reports within their Courses and Sessions.
    * Engagement metrics for their Courses.
    * Content effectiveness analytics for their Course materials.
    * **Leaderboard Management (Optional):** Ability to view and potentially manage leaderboards for their Courses.
* **AI Agent Interaction Logs (Anonymized & Aggregated):** Insights into student interactions with AI agents within their Courses.

**C. Admin Portal:**

* **User Management:**
    * Manage user accounts (students, educators, admins, program coordinators).
    * Role assignment and permissions.
* **Program, Course & Session Management:**
    * Create, edit, and manage Programs.
    * Define curriculum structures and learning objectives for Programs.
    * Oversee the creation and management of Courses and Sessions.
* **AI Agent Configuration:**
    * Configure AI agent parameters (personality, response style, knowledge base access).
    * Monitor AI agent performance across the platform.
* **System Monitoring & Analytics:**
    * Platform usage statistics.
    * AI agent performance monitoring.
    * Technical issue identification.
* **Credit System Management:**
    * Manage student credit balances.
    * Configure credit costs for AI interactions.
    * Track credit usage.
* **Content Library Management:**
    * Centralized repository for learning content across all Programs and Courses.
    * Tools for content organization and categorization.
* **Program Coordinator Management:**
    * Create, edit, and manage program coordinator accounts.
    * Assign program coordinators to specific Programs.

**D. Program Coordinator Portal:**

* **Dashboard:**
    * Overview of assigned Programs.
    * Program performance summary (enrollment, completion rates, average quiz scores across Courses).
    * Content approval queue for Courses within their Programs.
    * Educator activity summary within their Programs.
    * **Program Academic Calendar Overview:** View the academic calendar for their assigned Programs.
* **Program Management:**
    * View Program details (objectives, curriculum, enrolled students, associated educators, linked Courses).
    * Program Approval Workflow:
        * Review Program structure and alignment.
        * Approve/reject Programs.
    * **Program Academic Calendar Management:**
        * Create and manage the academic calendar for their assigned Programs, including key dates, holidays, and deadlines.
    * Manage Program Curriculum:
        * View subject sequencing and Course structure within the Program.
        * Suggest curriculum adjustments to educators.
    * Monitor Program Health (KPI tracking across Courses).
* **Content Management & Approval:**
    * Content review interface for all Courses within their Programs.
    * Approve/reject content (interactive readings, quizzes, flashcards) for Courses.
    * Provide feedback to educators on Course content.
    * Manage Subject Knowledge Base (RAG) for their Programs:
        * Review and approve documents for the vector database relevant to their Programs.
        * Ensure knowledge base quality and relevance.
        * Monitor RAG system performance within their Programs.
* **Educator Management (Within Assigned Programs):**
    * View assigned educators across all Courses within their Programs and also assign educators to single or multiple courses within program.
    * Monitor educator activity and contributions.
    * Provide feedback and support to educators.
    * Approve/reject educator applications with comments.
* **Reporting & Analytics:**
    * Program performance reports (aggregated from Course data).
    * Content effectiveness reports across Courses.
    * Educator performance reports within their Programs.
* **Communication Tools:**
    * Direct messaging with educators within their Programs.
    * Program-specific announcements to students enrolled in their Programs.

## II. Core AI Agents & Their Capabilities:

* **Personalized Learning Architect (PLA):**
    * **Memory:** Long-term memory of student learning history, goals, preferences, and emotional responses across all enrolled Programs and Courses.
    * **Emotional Awareness:** Adapts to student frustration or boredom with encouragement. Celebrates successes.
    * **Functions:** Creates and manages personalized learning paths within Courses, recommends content, adjusts pace, monitors progress across the platform.
* **Knowledge Navigator (KN):**
    * **Memory:** Remembers student's understanding of concepts and related interactions within specific Courses.
    * **Emotional Awareness:** Simplifies explanations when sensing confusion in a Course. Offers alternative perspectives.
    * **Functions:** Provides explanations, answers questions, connects concepts, retrieves information from the RAG knowledge base relevant to the current Course, generates examples.
* **Practice Partner (PP):**
    * **Memory:** Tracks student performance on exercises within specific Courses, identifying strengths and weaknesses.
    * **Emotional Awareness:** Provides encouraging feedback and adjusts challenge levels within a Course.
    * **Functions:** Generates personalized practice within Courses, provides feedback, adapts difficulty, recommends further practice.
* **Motivation Mentor (MM):**
    * **Memory:** Understands student's motivational triggers across their learning journey.
    * **Emotional Awareness:** Provides personalized encouragement and support.
    * **Functions:** Sets micro-goals, provides motivational messages, helps with procrastination, connects with relevant stories.
* **Writing Assistant Agent (WAA):**
    * **Memory:** Remembers student's writing style, errors, and feedback within the context of Course assignments.
    * **Emotional Awareness:** Offers gentle suggestions.
    * **Functions:** Provides feedback on grammar, style, and clarity for Course-related writing, suggests improvements, helps with brainstorming.

## III. Technical Considerations & Integrations:

* **AI Models:**
    * Google Generative AI (e.g., Gemini) for natural language understanding and text generation.
    * Google Learn LM for personalized learning paths and adaptive assessments.
    * Potential for custom fine-tuned models for specific subjects or Program needs.
* **Retrieval-Augmented Generation (RAG):**
    * **In-house Open Source Vector Database:** (e.g., Weaviate, Milvus, Chroma) for storing embedded knowledge.
    * **Embedding Model:** (e.g., Sentence-BERT, OpenAI Embeddings) for converting text to vector representations.
    * **Data Ingestion Pipeline:** Includes content preprocessing, chunking, embedding generation, and indexing, organized by Course and Program.
    * **Query Processing:** Embed query, perform similarity search within the relevant Course or Program knowledge base, retrieve context, generate response using a language model.
    * **Program Coordinator Oversight:** Review access to the vector database for their Programs and associated Courses.
* **Natural Language Processing (NLP):** For understanding student queries.
* **Emotion Detection (Optional):** Privacy-preserving methods or explicit consent for camera-based analysis.
* **Credit System/AI Message Tracking:** System to track credit usage for AI interactions.
* **Scalability & Performance:** Architecture designed for high user volume and AI interaction load.
* **Gamification Engine:**  Integration with a system to manage points, badges, and leaderboards.

## IV. Revised Workflow with Program Coordinator:

1. **Program Coordinator Defines Academic Calendar:** Sets key dates and deadlines for the Program.
2. **Educator Authors Course Content:** Creates learning materials and knowledge base contributions for their Courses.
3. **Content Submission:** Submits Course content for review.
4. **Program Coordinator Review & Approval:** Reviews Course content for quality and alignment with Program objectives. Approves or rejects content.
5. **Knowledge Base Updates (RAG):** Program Coordinators approve updates to the vector database for their Programs and Courses.
6. **AI Agent Access to Approved Content:** AI Agents utilize approved content and knowledge base information within the relevant Course and Program context.
7. **Student Interaction & Personalized Learning:** Students access Programs, enroll in Courses, participate in Sessions, and interact with AI Agents, benefiting from curated and approved learning materials and gamified activities.

## V. Credit System/AI Message Usage:

* **Credit System:** Limited credits for specific AI interactions or premium features.
* **AI Message Limits:** Free tier with limited AI interactions, upgrade options available.
* **Tiered Access:** Different subscription levels with varying access to AI features and gamified content.

## VI. Benefits of the Platform:

* Highly Personalized and Adaptive Learning Experiences
* Emotionally Aware AI Agents for Enhanced Engagement
* Structured Program and Course Management
* Robust Content Quality Control through Program Coordinator Oversight
* Engaging and Motivating Learning through Gamification
* Scalable Architecture for Growth
* Data-Driven Insights for Continuous Improvement




current implimentation

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

