import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nama: string = 'Nama Petualang';
  nim: string = '12345678';
  fotoUrl: string = 'assets/img/adventurer.jpg';

  constructor() {}
}
