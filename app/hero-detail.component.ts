import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  styleUrls: ['hero-detail.component.css'],
  templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
	hero: Hero;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit():void{
		this.route.params
			.switchMap((params:Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}

	goBack():void{
		this.location.back();
	}

	save(): void {
	  this.heroService.updateHero(this.hero)
	    .then(() => this.goBack());
	}
}