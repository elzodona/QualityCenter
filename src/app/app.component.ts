import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elzo';
  child: string = 'vente'
  img: string = 'assets/logo.png'
  date!: Date

  ngOnInit(){
    this.date=new Date();
  }

  analyse(){
    Notify.info("Cette page n'est pas encore disponible !!!!");
  }

  one(){
    this.child = 'overview'
  }

  two(){
    this.child = 'vente'
  }

}
