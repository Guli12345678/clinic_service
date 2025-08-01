import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role, User, Admin } from "generated/prisma";
import { ROLES_KEY, AllowedRoles } from "../decorators/roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<AllowedRoles[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const user = req.admin;

    if (!user) {
      return false;
    }

    if ("is_creator" in user && typeof user.is_creator === "boolean") {
      const admin = user as Admin;
      if (requiredRoles.includes("SUPERADMIN") && admin.is_creator) {
        return true;
      }
      if (requiredRoles.includes("ADMIN") && !admin.is_creator) {
        return true;
      }
      if (requiredRoles.includes("ADMIN") && admin.is_creator) {
        return true;
      }
      return false;
    }

    if ("role" in user && typeof user.role === "string") {
      const regularUser = user as User;
      return requiredRoles.some((role) => regularUser.role === role);
    }

    return false;
  }
}
