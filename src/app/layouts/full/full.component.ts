import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { navItems } from './sidebar/sidebar-data';
import { NavService } from '../../services/nav.service';
import { AppNavItemComponent } from './sidebar/nav-item/nav-item.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TablerIconsModule } from 'angular-tabler-icons';
import { HeaderComponent } from './header/header.component';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TranslationServService } from 'src/app/services/translation-serv.service';

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';
const BELOWMONITOR = 'screen and (max-width: 1023px)';


@Component({
  selector: 'app-full',
  standalone: true,
  imports: [
    RouterModule,
    AppNavItemComponent,
    MaterialModule,
    CommonModule,
    SidebarComponent,
    NgScrollbarModule,
    TablerIconsModule,
    HeaderComponent,
  ],
  templateUrl: './full.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})

export class FullComponent implements OnInit {

  navItems = navItems;
  dir:any= 'ltr'

  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | any;

  //get options from service
  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;
  

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(private breakpointObserver: BreakpointObserver,
     private navService: NavService,
    private translate:TranslateService,
    private translation:TranslationServService
    ) {
    
    this.htmlElement = document.querySelector('html')!;
    this.htmlElement.classList.add('light-theme');
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes

        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];

        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });
      
  }

  ngOnInit(): void {

// this code practice on token in header 

    // this.loginService.getprofilewithToken().subscribe((res:any)=>{
    //   console.log(res);
    //   alert("done")
      
    // })
    
    this.translateSidenav()
  }

 
  

translateSidenav(){

const currentLang = localStorage.getItem('lang')
// const dir = this.dir


  this.translate.get('sidebar.Dashboard').subscribe((res:any)=>{
    this.navItems[0].displayName = this.translate.instant('sidebar.Dashboard')
    this.navItems[1].displayName = this.translate.instant('sidebar.list-products')
    this.navItems[2].displayName = this.translate.instant('sidebar.list-comment')
    this.navItems[3].displayName = this.translate.instant('sidebar.list-user')
    this.navItems[4].displayName = this.translate.instant('sidebar.list-order')
  })
  this.translate.onLangChange.subscribe((res:any)=>{
    this.navItems[0].displayName = this.translate.instant('sidebar.Dashboard')
    this.navItems[1].displayName = this.translate.instant('sidebar.list-products')
    this.navItems[2].displayName = this.translate.instant('sidebar.list-comment')
    this.navItems[3].displayName = this.translate.instant('sidebar.list-user')
    this.navItems[4].displayName = this.translate.instant('sidebar.list-order')
  })
  // this.translate.use('en')
  this.translation.use(currentLang!)
  
  

}

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
    
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }

  eventLang(event:any){

   if(event == 'en'){
       this.dir = 'ltr'
   }else{
    this.dir = 'rtl'
   }
    
  }
 
}
