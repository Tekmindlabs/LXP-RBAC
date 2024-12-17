import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { DefaultRoles } from '../src/utils/permissions';

const prisma = new PrismaClient();

async function main() {
  // First, create the roles
  const roles = await Promise.all([
    prisma.role.upsert({
      where: { name: DefaultRoles.SUPER_ADMIN },
      update: {},
      create: {
        name: DefaultRoles.SUPER_ADMIN,
        description: 'Super Administrator with full access',
      },
    }),
    prisma.role.upsert({
      where: { name: DefaultRoles.ADMIN },
      update: {},
      create: {
        name: DefaultRoles.ADMIN,
        description: 'Administrator with elevated access',
      },
    }),
    prisma.role.upsert({
      where: { name: DefaultRoles.PROGRAM_COORDINATOR },
      update: {},
      create: {
        name: DefaultRoles.PROGRAM_COORDINATOR,
        description: 'Program Coordinator role',
      },
    }),
    prisma.role.upsert({
      where: { name: DefaultRoles.TEACHER },
      update: {},
      create: {
        name: DefaultRoles.TEACHER,
        description: 'Teacher role',
      },
    }),
    prisma.role.upsert({
      where: { name: DefaultRoles.STUDENT },
      update: {},
      create: {
        name: DefaultRoles.STUDENT,
        description: 'Student role',
      },
    }),
    prisma.role.upsert({
      where: { name: DefaultRoles.PARENT },
      update: {},
      create: {
        name: DefaultRoles.PARENT,
        description: 'Parent role',
      },
    }),
  ]);

  // Create demo users with their respective roles
  const demoUsers = [
    {
      email: 'superadmin@example.com',
      password: 'superadmin123',
      name: 'Super Admin',
      role: DefaultRoles.SUPER_ADMIN,
    },
    {
      email: 'admin@example.com',
      password: 'admin123',
      name: 'Admin',
      role: DefaultRoles.ADMIN,
    },
    {
      email: 'coordinator@example.com',
      password: 'coordinator123',
      name: 'Program Coordinator',
      role: DefaultRoles.PROGRAM_COORDINATOR,
    },
    {
      email: 'teacher@example.com',
      password: 'teacher123',
      name: 'Teacher',
      role: DefaultRoles.TEACHER,
    },
    {
      email: 'student@example.com',
      password: 'student123',
      name: 'Student',
      role: DefaultRoles.STUDENT,
    },
    {
      email: 'parent@example.com',
      password: 'parent123',
      name: 'Parent',
      role: DefaultRoles.PARENT,
    },
  ];

  for (const demoUser of demoUsers) {
    const hashedPassword = await bcrypt.hash(demoUser.password, 12);
    const role = roles.find((r) => r.name === demoUser.role);

    if (!role) continue;

    await prisma.user.upsert({
      where: { email: demoUser.email },
      update: {},
      create: {
        email: demoUser.email,
        name: demoUser.name,
        password: hashedPassword,
        userRoles: {
          create: {
            roleId: role.id,
          },
        },
      },
    });
  }

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error('Error while seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });