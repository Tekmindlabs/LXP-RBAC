export const Permissions = {
  // User permissions
  USER_CREATE: "user:create",
  USER_READ: "user:read",
  USER_UPDATE: "user:update",
  USER_DELETE: "user:delete",
  
  // Role permissions
  ROLE_CREATE: "role:create",
  ROLE_READ: "role:read",
  ROLE_UPDATE: "role:update",
  ROLE_DELETE: "role:delete",
  
  // Permission management
  PERMISSION_MANAGE: "permission:manage",
  
  // System settings
  SETTINGS_MANAGE: "settings:manage",
} as const;

export type Permission = typeof Permissions[keyof typeof Permissions];

export const DefaultRoles = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  PROGRAM_COORDINATOR: "program_coordinator",
  TEACHER: "teacher",
  STUDENT: "student",
  PARENT: "parent",
} as const;

export type Role = typeof DefaultRoles[keyof typeof DefaultRoles];

export const RolePermissions: Record<Role, Permission[]> = {
  [DefaultRoles.SUPER_ADMIN]: Object.values(Permissions),
  [DefaultRoles.ADMIN]: [
    Permissions.USER_CREATE,
    Permissions.USER_READ,
    Permissions.USER_UPDATE,
    Permissions.USER_DELETE,
    Permissions.ROLE_READ,
    Permissions.SETTINGS_MANAGE,
  ],
  [DefaultRoles.PROGRAM_COORDINATOR]: [
    Permissions.USER_READ,
    Permissions.USER_UPDATE,
  ],
  [DefaultRoles.TEACHER]: [
    Permissions.USER_READ,
  ],
  [DefaultRoles.STUDENT]: [
    Permissions.USER_READ,
  ],
  [DefaultRoles.PARENT]: [
    Permissions.USER_READ,
  ],
};