import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ANIMALES} from '../../data/data.animales';
import {Animal} from '../../interfaces/animales.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = []

  constructor(public navCtrl: NavController) {
    this.animales = ANIMALES.splice(0);
  }

  reproducir(animal:Animal){

    let audio = new Audio();
    audio.src = animal.audio;
    audio.load();
    audio.play();

    animal.reproduciendo = true;

    setTimeout( ()=>animal.reproduciendo=false, animal.duracion * 1000)

  }
}
