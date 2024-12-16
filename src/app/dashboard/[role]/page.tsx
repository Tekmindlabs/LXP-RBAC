import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import { DefaultRoles } from "@/utils/permissions";
import { DashboardContent } from "@/components/dashboard/content";

export default async function RoleDashboard({
  params,
}: {
  params: { role: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  // Verify user has access to this role's dashboard
  if (!session.user.roles.includes(params.role)) {
    // Redirect to their primary role dashboard
    redirect(`/dashboard/${session.user.roles[0]}`);
  }

  return <DashboardContent role={params.role as keyof typeof DefaultRoles} />;
}