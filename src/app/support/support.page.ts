import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  video() {
    console.log('video');
  }

  coffee() {
    console.log('coffee');
    console.log('https://www.buymeacoffee.com/TzM2Vwa4L');
    
  }

}
