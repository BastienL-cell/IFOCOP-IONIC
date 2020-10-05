import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {
  heroes: any;

  constructor(private heroesService: HeroesService) {
    this.heroes = this.heroesService.heroes;
   }

  ngOnInit() {
  }

}
