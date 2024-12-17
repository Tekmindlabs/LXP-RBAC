import { DefaultRoles } from "@/utils/permissions";
import { DashboardFeature } from "@/types/dashboard";

export const DashboardFeatures: Record<keyof typeof DefaultRoles, DashboardFeature[]> = {
  [DefaultRoles.SUPER_ADMIN]: [
    'system-metrics',
    'user-management',
    'role-management',
    'audit-logs',
    'advanced-settings'
  ],
  [DefaultRoles.ADMIN]: [
    'user-management',
    'audit-logs'
  ],
  [DefaultRoles.PROGRAM_COORDINATOR]: [
    'class-management',
    'student-progress'
  ],
  [DefaultRoles.TEACHER]: [
    'class-management',
    'student-progress',
    'assignments',
    'grading'
  ],
  [DefaultRoles.STUDENT]: [
    'assignments',
    'student-progress'
  ],
  [DefaultRoles.PARENT]: [
    'student-progress'
  ]
};