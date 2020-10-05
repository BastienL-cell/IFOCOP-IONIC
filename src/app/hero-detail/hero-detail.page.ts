import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
})
export class HeroDetailPage implements OnInit {
  heroName: string;
  heroId: number;
  id: number;

  constructor(private heroService: HeroesService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params["id"];
    this.id = id;
    this.heroName = this.heroService.getHero(+id).name;
    this.heroId = this.heroService.getHero(+id).id;
  }

  ngOnInit() {
  }

}
