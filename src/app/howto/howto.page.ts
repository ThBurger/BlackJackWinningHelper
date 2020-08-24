import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.page.html',
  styleUrls: ['./howto.page.scss'],
})
export class HowtoPage implements OnInit {

  constructor(
    private storage: Storage,
    private menu: MenuController,
    public router: Router) { }

  ngOnInit() {
  }

  startTuturial(){
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }

}
