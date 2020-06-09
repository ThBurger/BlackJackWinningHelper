import { Component, Inject, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

import { DOCUMENT} from '@angular/common';
import { TwoCardCalculator } from './TwoCardCalculator';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.page.html',
  styleUrls: ['./blackjack.page.scss'],
})
export class BlackjackPage implements OnInit, AfterViewInit {

  public disabled = true;
  indexOfCards: number = 0;
  constructor(
    @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  clickCard(card: string){
    if (this.indexOfCards == 0) {
      this.yc1.innerText = card;
      this.changeColors(this.yc1, this.yc2);
    } else if (this.indexOfCards == 1) {
      this.yc2.innerText = card;
      this.changeColors(this.yc2, this.dc1);
    } else if (this.indexOfCards == 2) {
      this.dc1.innerText = card;
      this.changeColors(this.dc1, this.yc3);
    } else if (this.indexOfCards == 3) {
      this.yc3.innerText = card;
      this.changeColors(this.yc3, this.yc4);
    } else if (this.indexOfCards == 4) {
      this.yc4.innerText = card;
      this.changeColors(this.yc4, this.yc5);
    } else if (this.indexOfCards == 5) {
      this.yc5.innerText = card;
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
      action = TwoCardCalculator.calculate(
        this.dc1.innerText,
        this.yc1.innerText,
        this.yc2.innerText);
      } else if (this.indexOfCards == 4) {
        action = "ThreeCardCalculator";
      } else if (this.indexOfCards == 5) {
        action = "FourCardCalculator";
      } else if (this.indexOfCards == 6) {
        action = "FiveCardCalculator";
      }
    this.action.innerText = action;
  }

  reset(){
    this.indexOfCards = 0;
    this.disabled = true;
    this.resetText();
    this.resetColors();
  }

  resetText() {
    this.yc1.innerText = '';
    this.yc2.innerText = '';
    this.yc3.innerText = '';
    this.yc4.innerText = '';
    this.yc5.innerText = '';
    this.dc1.innerText = '';
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

  get yc2() : HTMLElement {
    return this.doc.getElementById("yc2");
  }

  get yc3() : HTMLElement {
    return this.doc.getElementById("yc3");
  }

  get yc4() : HTMLElement {
    return this.doc.getElementById("yc4");
  }

  get yc5() : HTMLElement {
    return this.doc.getElementById("yc5");
  }

  get dc1() : HTMLElement {
    return this.doc.getElementById("dc1");
  }

  
  get action() : HTMLElement {
    return this.doc.getElementById("action");
  }

}
