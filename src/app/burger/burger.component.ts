import { Component, OnInit } from '@angular/core';
import { BurgersService, Burger } from '../Swagger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  burgers: Burger[];

  constructor(private burgerService: BurgersService) { }

  ngOnInit() {
    this.getBurgers();
  }

  getBurgers(): void {
    this.burgerService.listBurgers()
    .subscribe(burgers => this.burgers = burgers);
  }
}
