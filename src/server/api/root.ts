import { createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";
import { roleRouter } from "./routers/role";
import { permissionRouter } from "./routers/permission";

export const appRouter = createTRPCRouter({
  user: userRouter,
  role: roleRouter,
  permission: permissionRouter,
});

export type AppRouter = typeof appRouter;