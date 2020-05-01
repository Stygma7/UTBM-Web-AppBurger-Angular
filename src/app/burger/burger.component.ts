import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../Swagger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  burgers: any;

  constructor(private burgerService: BurgersService) { }

  ngOnInit() {
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getBurgers(): void {
    this.burgers = this.burgerService.listBurgers();
  }
}
