// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('Roles required:', roles);

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Log the entire user object for inspection
    console.log('User:', user);

    // Check if user is defined and has a defined role property
    if (!user || user.role === undefined) {
      console.log('User or user role not found - denying access');
      return false;
    }

    console.log('User role:', user.role);

    if (!roles || !Array.isArray(roles)) {
      console.log(
        'No roles specified or roles is not an array - allowing access',
      );
      return true;
    }

    // Check if user.role is defined before accessing includes method
    const hasPermission = user.role !== undefined && roles.includes(user.role);
    console.log(`User has permission: ${hasPermission}`);
    return hasPermission;
  }
}
