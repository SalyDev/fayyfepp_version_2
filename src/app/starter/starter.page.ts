import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
})
export class StarterPage implements OnInit {

  @ViewChild('slider', { static: false }) slider: IonSlides;
  slides: any = [
    {
      text: 'Je peux payer et transférer de l’argent à tous les wallets',
      image: 'assets/images/slide1.png'
    },
    {
      text: 'Je cumule de l’argent sur plusieurs wallets différents et paie en une fois… ',
      image: 'assets/images/slide1.png'
    },
    {
      text: 'Et Maintenant je cotise, j’épargne et j’offre des cadeaux à mes proches…',
      image: 'assets/images/slide1.png'
    }
  ];

  slideOpts = {
    initialSlide: 0,
    autoplay: false,
    speed: 2000
  };

  comptes: any[] = [];

   // Private
  private unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,

  ) {
    this.unsubscribeAll = new Subject();
   }

  ngOnInit() {
  }

  nextSlide(): void{
    this.slider.isEnd().then((istrue) => {
      if(istrue){
        console.log('show home page');
      }
      else{
        this.slider.slideNext(300);
      }
    });
  }


}
