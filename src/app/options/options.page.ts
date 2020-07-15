import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  suits: string = '';
  strategy: string = '';
  backside: string = '';

  constructor(private storage: Storage) { }

  ionViewWillEnter() {
    this.storage.get('suits').then(res => {
      this.suits = res;
    });
    this.storage.get('strategy').then(res => {
      this.strategy = res;
    });
    this.storage.get('backside').then(res => {
      this.backside = res;
    });
  }
   
  ngOnInit() {
  }

  onChangeSuits($event){
    this.storage.set('suits', $event.target.value);
  }
  onChangeStrategy($event){
    this.storage.set('strategy', $event.target.value);
  }
  onChangeBackside($event){
    this.storage.set('backside', $event.target.value);
  }
}
