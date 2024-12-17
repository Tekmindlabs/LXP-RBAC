import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { prisma } from "@/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import bcrypt from "bcryptjs";
import { env } from "@/env.mjs";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      roles: string[];
      permissions: string[];
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    roles: string[];
    permissions: string[];
  }
}

export const authOptions: NextAuthOptions = {
  debug: false,
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) {
        // Fetch user roles and permissions
        const userWithRoles = await prisma.user.findUnique({
          where: { id: user.id },
          include: {
            userRoles: {
              include: {
                role: {
                  include: {
                    permissions: {
                      include: {
                        permission: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });

        const roles = userWithRoles?.userRoles.map((ur) => ur.role.name) ?? [];
        const permissions = userWithRoles?.userRoles
          .flatMap((ur) => ur.role.permissions)
          .map((rp) => rp.permission.name) ?? [];

        session.user.id = user.id;
        session.user.roles = roles;
        session.user.permissions = permissions;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            userRoles: {
              include: {
                role: {
                  include: {
                    permissions: {
                      include: {
                        permission: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });
        
        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }
        
        const isValid = await bcrypt.compare(credentials.password, user.password);
        
        if (!isValid) {
          throw new Error("Invalid credentials");
        }
        
        // Extract roles and permissions
        const roles = user.userRoles.map((ur) => ur.role.name);
        const permissions = user.userRoles
          .flatMap((ur) => ur.role.permissions)
          .map((rp) => rp.permission.name);
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: roles,
          permissions: permissions
        };
      },
    }),
    EmailProvider({
      server: {
        host: env.EMAIL_SERVER_HOST,
        port: env.EMAIL_SERVER_PORT,
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};