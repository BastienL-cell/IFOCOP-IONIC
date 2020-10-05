import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  heroes: any;

  constructor(private heroesService: HeroesService) {
    this.heroes = this.heroesService.heroes.slice(1, 5);
   }

  ngOnInit() {
  }

}
