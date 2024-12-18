Part 1: Core Authentication and User Management

prisma
Copy code
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Core User Models
model User {
  id                  String    @id @default(cuid())
  authUserId          String    @unique
  name                String?
  email               String    @unique
  emailVerified       DateTime?
  image               String?
  password            String?
  role                UserRole
  status              Status    @default(ACTIVE)
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt
  deleted             DateTime?
  dataRetentionDate   DateTime?

  // Relations
  accounts            Account[]
  sessions            Session[]
  userRoles          UserRole[]
  coordinatedPrograms Program[]  @relation("ProgramCoordinator")
  teacherClasses     Class[]     @relation("ClassTeacher")
  teacherSubjects    Subject[]   @relation("SubjectTeacher")
  studentClass       Class?      @relation("StudentClass")
  aiInteractions     AIInteraction[]
  learningAnalytics  LearningAnalytics[]
  activityLogs       ActivityLog[]
  
  // AI & Learning specific
  learningStyle      Json?
  aiRecommendations  Json?
  aiSettings         Json?
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
Part 2: Educational Core Models

prisma
Copy code
model Program {
  id            String    @id @default(cuid())
  name          String    @db.VarChar(100)
  description   String?
  level         String    @db.VarChar(50)
  status        Status    @default(ACTIVE)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deleted       DateTime?
  version       Int       @default(1)
  
  coordinator   User?     @relation("ProgramCoordinator", fields: [coordinatorId], references: [id])
  coordinatorId String?
  classes       Class[]
  classGroups   ClassGroup[]
}

model Class {
  id          String    @id @default(cuid())
  name        String    @db.VarChar(100)
  capacity    Int
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deleted     DateTime?
  
  program     Program   @relation(fields: [programId], references: [id])
  programId   String
  teacher     User      @relation("ClassTeacher", fields: [teacherId], references: [id])
  teacherId   String
  students    User[]    @relation("StudentClass")
  activities  ClassActivity[]
  resources   ClassResource[]
  aiAnalytics Json?    // AI-generated class analytics
}

model Subject {
  id          String    @id @default(cuid())
  name        String
  code        String    @unique
  description String?
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deleted     DateTime?
  
  teachers    User[]    @relation("SubjectTeacher")
  assessments Assessment[]
  aiContent   Json?     // AI-generated content suggestions
}
Part 3: AI and Analytics Integration

prisma
Copy code
model AIAgent {
  id          String    @id @default(cuid())
  name        String
  type        AgentType
  config      Json
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  memory      AIMemory[]
  workflows   AIWorkflow[]
  interactions AIInteraction[]
}

model LearningAnalytics {
  id          String    @id @default(cuid())
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  metrics     Json
  insights    Json
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@index([userId])
}

model KnowledgeGraph {
  id          String    @id @default(cuid())
  nodes       Json
  edges       Json
  metadata    Json?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

// Enums for AI Integration
enum AgentType {
  TUTOR
  GRADER
  COORDINATOR
  ADMIN_ASSISTANT
  CONTENT_CREATOR
}
Part 4: Assessment and Resource Management

prisma
Copy code
model Assessment {
  id          String    @id @default(cuid())
  title       String
  description String?
  type        AssessmentType
  totalMarks  Float
  dueDate     DateTime
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deleted     DateTime?
  
  subject     Subject   @relation(fields: [subjectId], references: [id])
  subjectId   String
  aiGrading   Boolean   @default(false)
  aiRubric    Json?
  aiAnalysis  Json?
}

model Resource {
  id          String    @id @default(cuid())
  title       String
  type        ResourceType
  url         String
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deleted     DateTime?
  
  aiGenerated Boolean   @default(false)
  aiMetadata  Json?
  aiTags      String[]
}

// Common Enums
enum Status {
  ACTIVE
  INACTIVE
  PENDING
  ARCHIVED
  SUSPENDED
}

enum UserRole {
  ADMIN
  PROGRAM_COORDINATOR
  TEACHER
  STUDENT
  PARENT
}

enum AssessmentType {
  QUIZ
  TEST
  EXAM
  PROJECT
}

enum ResourceType {
  DOCUMENT
  VIDEO
  AUDIO
  LINK
  IMAGE
  OTHER
}
This schema:

Uses cuid() for all IDs
Integrates AI capabilities throughout
Maintains core educational functionality
Includes analytics and knowledge management
Supports GDPR compliance
Provides extensible structure
Would you like me to provide more details about any specific part or additional models needed?



Copy message
kinldy continue still we missing classroom management academic calendar management, teacherworkspaces as per assigned subjects-classes, timetables, parents

21 Results

/base. requirements.md
tekmindlabs/lxp-rbaclxp-roles
/tasks.md
tekmindlabs/lxp-rbaclxp-roles
View 19 More...
I'll help transform the schema to include the missing components for classroom management, academic calendar, teacher workspaces, timetables, and parent interactions. Let's break this down into logical sections:

Academic Calendar Management:
prisma
Copy code
model AcademicYear {
  id          String    @id @default(cuid())
  name        String
  startDate   DateTime
  endDate     DateTime
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  terms       Term[]
  events      Event[]
}

model Term {
  id            String    @id @default(cuid())
  name          String
  academicYear  AcademicYear @relation(fields: [academicYearId], references: [id])
  academicYearId String
  startDate     DateTime
  endDate       DateTime
  status        Status    @default(ACTIVE)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  timetables    Timetable[]
}

model Event {
  id            String    @id @default(cuid())
  title         String
  description   String?
  eventType     EventType
  startDate     DateTime
  endDate       DateTime
  academicYear  AcademicYear @relation(fields: [academicYearId], references: [id])
  academicYearId String
  status        Status    @default(ACTIVE)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
Classroom Management:
prisma
Copy code
model Classroom {
  id          String    @id @default(cuid())
  name        String
  capacity    Int
  building    String?
  floor       String?
  resources   ClassroomResource[]
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  schedules   ClassroomSchedule[]
}

model ClassroomResource {
  id          String    @id @default(cuid())
  name        String
  type        ResourceType
  quantity    Int
  classroom   Classroom @relation(fields: [classroomId], references: [id])
  classroomId String
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model ClassroomSchedule {
  id          String    @id @default(cuid())
  classroom   Classroom @relation(fields: [classroomId], references: [id])
  classroomId String
  timetableSlot TimetableSlot @relation(fields: [slotId], references: [id])
  slotId      String
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
Teacher Workspaces and Subject Assignment:
prisma
Copy code
model TeacherWorkspace {
  id          String    @id @default(cuid())
  teacher     User      @relation(fields: [teacherId], references: [id])
  teacherId   String
  subjects    TeacherSubject[]
  classes     TeacherClass[]
  resources   TeacherResource[]
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model TeacherSubject {
  id          String    @id @default(cuid())
  workspace   TeacherWorkspace @relation(fields: [workspaceId], references: [id])
  workspaceId String
  subject     Subject   @relation(fields: [subjectId], references: [id])
  subjectId   String
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model TeacherClass {
  id          String    @id @default(cuid())
  workspace   TeacherWorkspace @relation(fields: [workspaceId], references: [id])
  workspaceId String
  class       Class     @relation(fields: [classId], references: [id])
  classId     String
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
Timetable Management:
prisma
Copy code
model Timetable {
  id          String    @id @default(cuid())
  term        Term      @relation(fields: [termId], references: [id])
  termId      String
  class       Class     @relation(fields: [classId], references: [id])
  classId     String
  slots       TimetableSlot[]
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model TimetableSlot {
  id          String    @id @default(cuid())
  timetable   Timetable @relation(fields: [timetableId], references: [id])
  timetableId String
  dayOfWeek   Int       // 1-7 for Monday-Sunday
  startTime   String    // Format: "HH:mm"
  endTime     String    // Format: "HH:mm"
  subject     Subject   @relation(fields: [subjectId], references: [id])
  subjectId   String
  teacher     User      @relation(fields: [teacherId], references: [id])
  teacherId   String
  classroom   ClassroomSchedule[]
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
Parent Portal and Communication:
prisma
Copy code
model ParentPortal {
  id          String    @id @default(cuid())
  parent      User      @relation("ParentPortal", fields: [parentId], references: [id])
  parentId    String
  children    StudentParent[]
  notifications ParentNotification[]
  meetings    ParentTeacherMeeting[]
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model ParentNotification {
  id          String    @id @default(cuid())
  portal      ParentPortal @relation(fields: [portalId], references: [id])
  portalId    String
  title       String
  content     String
  type        NotificationType
  read        Boolean   @default(false)
  status      Status    @default(ACTIVE)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model ParentTeacherMeeting {
  id          String    @id @default(cuid())
  portal      ParentPortal @relation(fields: [portalId], references: [id])
  portalId    String
  teacher     User      @relation(fields: [teacherId], references: [id])
  teacherId   String
  scheduledFor DateTime
  status      Status    @default(ACTIVE)
  notes       String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
Additional Enums:
prisma
Copy code
enum EventType {
  HOLIDAY
  EXAM
  ASSEMBLY
  SPORTS
  CULTURAL
  OTHER
}

enum ResourceType {
  PROJECTOR
  COMPUTER
  WHITEBOARD
  FURNITURE
  LAB_EQUIPMENT
  OTHER
}

enum NotificationType {
  ACADEMIC
  BEHAVIORAL
  ATTENDANCE
  GENERAL
  EMERGENCY
}
This schema provides:

Complete academic calendar management with terms and events
Classroom management with resources and scheduling
Teacher workspaces with subject and class assignments
Comprehensive timetable management
Parent portal with notifications and meeting scheduling
Remember to:

Run prisma generate after updating the schema
Create appropriate migrations
Update your API routes to handle these new models
Implement appropriate access control for different user roles
Would you like me to provide more details about any specific part of this schema?



Copy message
kinldy continue and complye with notifications and messegeing

I'll help create the notification and messaging schema components that integrate with our existing educational platform schema. Here's the comprehensive addition:

prisma
Copy code
// Notification and Messaging System

model Notification {
  id          String      @id @default(cuid())
  title       String
  content     String
  type        NotificationType
  priority    Priority    @default(NORMAL)
  recipient   User        @relation("UserNotifications", fields: [recipientId], references: [id])
  recipientId String
  sender      User?       @relation("SentNotifications", fields: [senderId], references: [id])
  senderId    String?
  read        Boolean     @default(false)
  readAt      DateTime?
  actionUrl   String?
  metadata    Json?
  status      Status      @default(ACTIVE)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  expiresAt   DateTime?
  
  @@index([recipientId])
  @@index([senderId])
}

model Message {
  id          String      @id @default(cuid())
  content     String
  sender      User        @relation("SentMessages", fields: [senderId], references: [id])
  senderId    String
  conversation Conversation @relation(fields: [conversationId], references: [id])
  conversationId String
  attachments MessageAttachment[]
  read        Boolean     @default(false)
  readAt      DateTime?
  status      Status      @default(ACTIVE)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  deleted     DateTime?

  @@index([senderId])
  @@index([conversationId])
}

model Conversation {
  id          String      @id @default(cuid())
  type        ConversationType
  name        String?
  participants ConversationParticipant[]
  messages    Message[]
  status      Status      @default(ACTIVE)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  lastMessageAt DateTime  @default(now())
  metadata    Json?
}

model ConversationParticipant {
  id              String      @id @default(cuid())
  user            User        @relation(fields: [userId], references: [id])
  userId          String
  conversation    Conversation @relation(fields: [conversationId], references: [id])
  conversationId  String
  role            ParticipantRole @default(MEMBER)
  lastReadAt      DateTime?
  status          Status      @default(ACTIVE)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  @@unique([userId, conversationId])
  @@index([userId])
  @@index([conversationId])
}

model MessageAttachment {
  id          String      @id @default(cuid())
  message     Message     @relation(fields: [messageId], references: [id])
  messageId   String
  type        AttachmentType
  url         String
  name        String
  size        Int
  mimeType    String
  status      Status      @default(ACTIVE)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  @@index([messageId])
}

model NotificationPreference {
  id          String      @id @default(cuid())
  user        User        @relation(fields: [userId], references: [id])
  userId      String
  type        NotificationType
  email       Boolean     @default(true)
  push        Boolean     @default(true)
  inApp       Boolean     @default(true)
  status      Status      @default(ACTIVE)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  @@unique([userId, type])
  @@index([userId])
}

model NotificationTemplate {
  id          String      @id @default(cuid())
  name        String      @unique
  type        NotificationType
  subject     String
  content     String
  variables   String[]
  status      Status      @default(ACTIVE)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
}

// Enums for Notification and Messaging System
enum NotificationType {
  SYSTEM
  ACADEMIC
  ATTENDANCE
  ASSIGNMENT
  GRADE
  BEHAVIORAL
  ANNOUNCEMENT
  EVENT
  EMERGENCY
  MESSAGE
  REMINDER
}

enum Priority {
  LOW
  NORMAL
  HIGH
  URGENT
}

enum ConversationType {
  DIRECT
  GROUP
  CLASS
  DEPARTMENT
  ANNOUNCEMENT
}

enum ParticipantRole {
  OWNER
  ADMIN
  MEMBER
  GUEST
}

enum AttachmentType {
  IMAGE
  DOCUMENT
  VIDEO
  AUDIO
  OTHER
}

// Update User model to include these relations
model User {
  // ... existing fields ...
  
  // Notification Relations
  receivedNotifications Notification[] @relation("UserNotifications")
  sentNotifications    Notification[] @relation("SentNotifications")
  sentMessages        Message[]      @relation("SentMessages")
  conversations       ConversationParticipant[]
  notificationPreferences NotificationPreference[]
}
This notification and messaging schema provides:

Comprehensive Notification System:
Supports different notification types
Priority levels
Read status tracking
Action URLs for clickable notifications
Metadata for additional context
Expiration dates
Flexible Messaging System:
Direct and group conversations
Message attachments
Read receipts
Conversation participants with roles
Last read tracking
Notification Preferences:
Per-user notification settings
Multiple notification channels (email, push, in-app)
Customizable per notification type
Template System:
Reusable notification templates
Variable support for dynamic content
Type-specific templates
Attachment Handling:
Multiple attachment types
File metadata storage
Size and mime type tracking
Key Features:

GDPR compliant with deletion tracking
Scalable conversation system
Flexible notification routing
Rich metadata support
Comprehensive indexing for performance
To implement this:

Run migrations:
bash
Copy code
prisma migrate dev --name add_notification_system
Update API routes to handle:
Notification creation/delivery
Message sending/receiving
Conversation management
Preference management
Implement background jobs for:
Notification cleanup
Message delivery
Push notification sending
Create API endpoints for:
Notification preferences
Message threading
Conversation management
Attachment handling
