import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter, fromEvent, map } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '@app/services/sidenav.service';
import { MENU_ITEM } from './shared/model/menuItem';
import { menuItems } from './shared/model/menu';
import { NavigationEnd, NavigationStart, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterEvent } from '@angular/router';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;
  public menuName = '';
  public items_menu: MENU_ITEM[] = menuItems;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidenavService: SidenavService,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
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
      this.menuName = this.items_menu.filter(
        (item: MENU_ITEM) => item.link == `/${moduleName}`
      )[0].label;
    })
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
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
