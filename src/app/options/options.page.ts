import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  suits: string = '';
  strategy: string = '';
  backside: string = '';
  darkmode: boolean = false;
  darkmodeInit: boolean = false;
  autocalc: boolean = false;

  constructor(private storage: Storage,
    public toastController: ToastController) { }

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
    this.storage.get('autocalc').then(res => {
      this.autocalc = res;
    });
    this.storage.get('darkmode').then(res => {
      this.darkmode = res;
      this.darkmodeInit = res;
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
  onChangeDarkMode($event){
    this.storage.set('darkmode', this.darkmode);
    this.presentToast();
  }
  onChangeAutoCalc($event){
    this.storage.set('autocalc', this.autocalc);
  }

  async presentToast() {
    if (this.darkmodeInit == this.darkmode) {
      // doNothing
    } else {
      let message = this.darkmode ? 'DarkMode will be activated after relaunch of this app.' : 'DarkMode will be deactivated after relaunch of this app.';
      const toast = await this.toastController.create({
        message: message,
        duration: 2000
      });
      toast.present();
    }
  }
}
