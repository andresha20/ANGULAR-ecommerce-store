import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor (
    public appService: AppService
  ) {}
  navigationItems = [
    { url: '', name: 'Home' },
    { url: 'shop', name: 'Shop' },
  ];

  openCart() {
    this.appService.setIsCartModalOpen(!this.appService.isCartModalOpen);
  }
}
