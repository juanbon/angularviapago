import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from './side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input() isOpen = false;
  @Output() resizeScreen = new EventEmitter<any>();;
  public privilege: any = null;
  public menuItems: any = null;
  constructor(private menuService: MenuService) {



    let user: any = localStorage.getItem('auth-user');
if (user) {
  let access = JSON.parse(user)['access'];
  this.privilege = typeof access === 'string' ? [access] : access;
}

  }
/*

    let user: any = localStorage.getItem('auth-user');
    if (user) this.privilege = JSON.parse(user)['access'];
    console.log(this.privilege)
  }

*/




  ngOnInit() {
    this.menuService.getMenu().subscribe(
      (data) => { this.menuItems = data}
    );
  }


  toggleMenu() {

    console.log("111111111111111");
    this.isOpen = !this.isOpen;
  }

  isMobile(): boolean {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return screenWidth < 768;
  }

  hasSubItems(item: any): boolean {
    return Array.isArray(item.subitems) && item.subitems.length > 0;
  }
  
  handleItemClick(item: any): void {
    if (!this.hasSubItems(item) && this.isMobile()) {
      this.toggleMenuIsMobile();
    }
  }
  

  toggleMenuIsMobile() {
    // let isMobile = this.isMobile();
    // if (isMobile) this.resizeScreen.emit(this.isOpen);
    this.resizeScreen.emit(this.isOpen);
  }

  checkPrivilege(privileges: string[], userPrivileges: string[]): boolean {

/*
    console.log("22222222222222");
    console.log("userPrivileges",userPrivileges);
    return privileges.some(privilege => userPrivileges.includes(privilege));


    */
   return true;
  }

}
