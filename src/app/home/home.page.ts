import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
long:number = 0; //variable
lat: number = 0; //variable
time: number = 0; //variable

  constructor() {}
 
  //method for gps
  async getGPS(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.long = coordinates.coords.longitude;
    this.lat = coordinates.coords.latitude;
    this.time = coordinates.timestamp;
    console.log('Current position:', coordinates);
  }

  async getBrowser(){
    await Browser.open({url: 'http://www.google.com'});
  }
  
}
