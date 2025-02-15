import { Component } from '@angular/core';
import { provideRouter, Router, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  
})
export class NavbarComponent  {
  constructor(private router:Router){

  }
  navigateTo(route: string){
    this.router.navigate([route]);
  }
}
