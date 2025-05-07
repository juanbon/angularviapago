import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let access: any = localStorage.getItem('auth-user');
    const user: any = JSON.parse(access);
    const userRoles: string = user?.access || '';

    const requiredPrivileges = route.data['privilege'] as string[];
console.log(requiredPrivileges)
if (this.checkAccess(userRoles, requiredPrivileges)) {
  return true; 
}

return this.router.createUrlTree(['/login']);
}

private checkAccess(userRoles: string, requiredPrivileges: string[]): boolean {
return requiredPrivileges.includes(userRoles);
}
}