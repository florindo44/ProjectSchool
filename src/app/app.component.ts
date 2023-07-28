import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter, fromEvent, map } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '@app/services/sidenav.service';
import { MENU_ITEM } from './shared/model/menuItem';
import { menuItems } from './shared/model/menu';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  public isSmallScreen = false;
  public popText = false;
  public hideNavigations = true;
  public menuName = '';
  public items_menu: MENU_ITEM[] = menuItems;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public sidenavService: SidenavService,
    private router : Router
  ) { }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav = this.sidenav;
  }

  public get sidenavSituation() {
    return (this.sidenavService.getSidenav != undefined) ? this.sidenavService.getSidenav.opened : true
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe((value: number) => this.determineHeader(value))

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let moduleName = event.url.split('/')[1];

      // if(event.url.split('/').includes('auth')) {
      //   this.hideNavigations = false;
      //   this.menuName = '';
      // } else {
        this.menuName = this.items_menu.filter(
          (item: MENU_ITEM) => item.link == `/${moduleName}`
        )[0].label;

      //   this.hideNavigations = true;
      // }
    })
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
        .observe(['(max-width: 1280px)'])
        .subscribe((res) => this.isSmallScreen = res.matches);
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
