import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ['hero.component.css'],
  templateUrl: 'hero.component.html'
})
export class HeroesComponent implements OnInit{ 
	constructor(private heroService: HeroService, private router: Router) { }

	selectedHero: Hero;
	heroes : Hero[];

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero) {
		this.selectedHero = hero;
	}

	getHeroes():void{
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes);
	}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
