import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    public loadingController: LoadingController
  ) { }

  // This will show then autohide the loader
  showHideAutoLoader() {
    this.loadingController.create({
      message: 'Preparing...',
      duration: 2000
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {  });
    });

  }

  // Show the loader for infinite time
  showLoader() {
    this.loadingController.create({
      message: 'Preparing...',
    }).then((res) => {
      res.present();
    });
  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss().then((res) => { }).catch((error) => {
      console.log('error', error);
    });

  }

}
