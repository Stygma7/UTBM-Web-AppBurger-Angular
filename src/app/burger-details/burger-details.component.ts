import { Component, OnInit } from '@angular/core';
import { BurgersService, BurgerDetail } from '../Swagger';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {
  burger: BurgerDetail;
  constructor(
    private route: ActivatedRoute,
    private BurgersService: BurgersService,
    private location: Location
    ) {}

  ngOnInit() {
    this.getBurger()
  }

  getBurger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BurgersService.burgerDetail(id)
      .subscribe(burger => this.burger = burger);
  }

  goBack(): void {
    this.location.back();
  }
}
