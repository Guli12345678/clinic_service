import { SetMetadata } from "@nestjs/common";
import { Role } from "generated/prisma";

export type AllowedRoles =
  | Role
  | "ADMIN"
  | "SUPERADMIN"
  | "OWNER"
  | "PATIENT"
  | "DOCTOR";

export const ROLES_KEY = "roles";
export const Roles = (...roles: AllowedRoles[]) =>
  SetMetadata(ROLES_KEY, roles);
