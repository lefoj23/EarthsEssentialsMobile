import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {

  @Input() headerText: string;
  @Input() clock: string;
  @Input() pageName: string;
  @Input() isBackButton: boolean = false;
  @Input() isCloseButton: boolean = false;
  @Input() homeHeader: boolean = false;
    //public menuItem: any;


    constructor(private menu: MenuController, private router: Router, private navCtrl: NavController ) {
        //this.menuItem = [
        //    { name: "PR Approval", component:"/purchase-request-approval" },
        //    { name: "Purchase Order", component: "/purchase-request-approval" },
        //]


    }

  ngOnInit() {}



    openMenu() {
        this.menu.close();
        this.menu.enable(true, 'appMenu');
        this.menu.open('appMenu');

    }


  
    backButton() {
 
       // this.navCtrl.back();
        this.navCtrl.pop();
    }

    //logout() {
    //    this.menu.close('appMenu');
    //    this.router.navigate(['/login'])
    //}


    //openPage(str) {
    //    if (this.menu.isOpen) {
    //        this.menu.close();
    //    }
      
    //    this.navCtrl.navigateForward(str);

    //    console.log(this.menu)
    //   // this.router.navigate([`/${str}`])
   
    //}
}
