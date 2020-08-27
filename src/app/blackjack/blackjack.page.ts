import { Component, Inject, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

import { DOCUMENT} from '@angular/common';
import { TwoCardCalculator_Johnslots } from './TwoCardCalculator_Johnslots';
import { TwoCardCalculator_Blackjackstrategy } from './TwoCardCalculator_Blackjackstrategy';
import { MoreCardCalculator_Johnslots } from './MoreCardCalculator_Johnslots';
import { MoreCardCalculator_Blackjackstrategy } from './MoreCardCalculator_Blackjackstrategy';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Helper } from './Helper';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.page.html',
  styleUrls: ['./blackjack.page.scss'],
})
export class BlackjackPage implements OnInit, AfterViewInit {

  public disabled = true;
  indexOfCards: number = 0;
  card1: string = '';
  card2: string = '';
  card3: string = '';
  card4: string = '';
  card5: string = '';
  dealerCard: string = '';
  strategy: number = 0;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public toastController: ToastController,
    private storage: Storage) { }

  ngOnInit() {
    this.storage.get('strategy').then(res => {
      this.strategy = res;
    });
  }

  ngAfterViewInit() {
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'pls click on the card - not on the button',
      duration: 2000
    });
    toast.present();
  }

  clickCard(card: string, cardElement: any){
    if(!cardElement.target.src) {
      this.presentToast();
      return;
    }
    if (this.indexOfCards == 0) {
      this.card1 = card;
      this.yc1img.src = cardElement.target.src;
      this.changeColors(this.yc1, this.yc2);
    } else if (this.indexOfCards == 1) {
      this.card2 = card;
      this.yc2img.src = cardElement.target.src;
      this.changeColors(this.yc2, this.dc1);
    } else if (this.indexOfCards == 2) {
      this.dealerCard = card;
      this.dc1img.src = cardElement.target.src;
      this.changeColors(this.dc1, this.yc3);
    } else if (this.indexOfCards == 3) {
      this.card3 = card;
      this.yc3img.src = cardElement.target.src;
      this.changeColors(this.yc3, this.yc4);
    } else if (this.indexOfCards == 4) {
      this.card4 = card;
      this.yc4img.src = cardElement.target.src;
      this.changeColors(this.yc4, this.yc5);
    } else if (this.indexOfCards == 5) {
      this.card5 = card;
      this.yc5img.src = cardElement.target.src;
      this.yc5.classList.remove('ion-color-primary');
      this.yc5.classList.add('ion-color-warning');
    }

    if (this.indexOfCards >=2 ) {
      this.disabled = false;
    }
    this.indexOfCards++;
  }

  changeColors(actualCard: HTMLElement, nextCard: HTMLElement) {
    actualCard.classList.remove('ion-color-success');
    actualCard.classList.add('ion-color-warning');
    nextCard.classList.remove('ion-color-primary');
    nextCard.classList.add('ion-color-success');
  }

  calculate(){
    let action = "";
    if(this.indexOfCards == 3) {
      if (this.strategy == 1) { //Johnslots
        action = TwoCardCalculator_Johnslots
        .calculate(this.dealerCard, this.card1, this.card2);
      } else if (this.strategy == 2) { //BlackJackStrategy
        action = TwoCardCalculator_Blackjackstrategy
        .calculate(this.dealerCard, this.card1, this.card2);
      } else { // no impl
        action = 'no impl of strategy' + this.strategy
      }
    } else if (this.indexOfCards >= 4) {
      if (this.strategy == 1) { //Johnslots
        action = MoreCardCalculator_Johnslots
        .calculate(this.dealerCard, this.card1, this.card2, this.card3, this.card4, this.card5);
      } else if (this.strategy == 2) { //BlackJackStrategy
        action = MoreCardCalculator_Blackjackstrategy
        .calculate(this.dealerCard, this.card1, this.card2, this.card3, this.card4, this.card5);
      } else { // no impl
        action = 'no impl of strategy' + this.strategy
      }
    }

    if(action == Helper.H) {
      this.ysimg.src = 'assets/img/hit_card.png';
    } else if (action == Helper.S) {
      this.ysimg.src = 'assets/img/old-2.png';
    }
    //TODO weitermachen mit actions


    this.action.innerText = action;
  }

  reset(){
    this.indexOfCards = 0;
    this.disabled = true;
    this.resetCards();
    this.resetColors();
    this.action.innerText = '';
  }

  resetCards() {
    this.dealerCard = '';
    this.card1 = '';
    this.card2 = '';
    this.card3 = '';
    this.card4 = '';
    this.card5 = '';
    this.yc1img.src = 'assets/img/cards/backside-blue.png';
    this.yc2img.src = 'assets/img/cards/backside-blue.png';
    this.yc3img.src = 'assets/img/cards/backside-blue.png';
    this.yc4img.src = 'assets/img/cards/backside-blue.png';
    this.yc5img.src = 'assets/img/cards/backside-blue.png';
    this.dc1img.src = 'assets/img/cards/backside-blue.png';
    this.ysimg.src = 'assets/img/placeholder.png';
  }

  resetColors() {
    this.yc1.classList.remove('ion-color-warning');
    this.yc1.classList.add('ion-color-success');
    this.yc2.classList.remove('ion-color-warning');
    this.yc2.classList.remove('ion-color-success');
    this.yc2.classList.add('ion-color-primary');
    this.yc3.classList.remove('ion-color-warning');
    this.yc3.classList.remove('ion-color-success');
    this.yc3.classList.add('ion-color-primary');
    this.yc4.classList.remove('ion-color-warning');
    this.yc4.classList.remove('ion-color-success');
    this.yc4.classList.add('ion-color-primary');
    this.yc5.classList.remove('ion-color-warning');
    this.yc5.classList.remove('ion-color-success');
    this.yc5.classList.add('ion-color-primary');
    this.dc1.classList.remove('ion-color-warning');
    this.dc1.classList.remove('ion-color-success');
    this.dc1.classList.add('ion-color-primary');
  }

  get yc1() : HTMLElement {
    return this.doc.getElementById("yc1");
  }

  get yc1img() : HTMLImageElement {
    return <HTMLImageElement>this.doc.getElementById("yc1img");
  }

  get yc2() : HTMLElement {
    return this.doc.getElementById("yc2");
  }

  get yc2img() : HTMLImageElement {
    return <HTMLImageElement>this.doc.getElementById("yc2img");
  }

  get yc3() : HTMLElement {
    return this.doc.getElementById("yc3");
  }

  get yc3img() : HTMLImageElement {
    return <HTMLImageElement>this.doc.getElementById("yc3img");
  }

  get yc4() : HTMLElement {
    return this.doc.getElementById("yc4");
  }

  get yc4img() : HTMLImageElement {
    return <HTMLImageElement>this.doc.getElementById("yc4img");
  }

  get yc5() : HTMLElement {
    return this.doc.getElementById("yc5");
  }

  get yc5img() : HTMLImageElement {
    return <HTMLImageElement>this.doc.getElementById("yc5img");
  }

  get dc1() : HTMLElement {
    return this.doc.getElementById("dc1");
  }

  get dc1img() : HTMLImageElement {
    return <HTMLImageElement>this.doc.getElementById("dc1img");
  }

  
  get action() : HTMLElement {
    return this.doc.getElementById("action");
  }

  get ys() : HTMLElement {
    return this.doc.getElementById("ys");
  }
  
  get ysimg() : HTMLImageElement {
    return <HTMLImageElement>this.doc.getElementById("ysimg");
  }

}
