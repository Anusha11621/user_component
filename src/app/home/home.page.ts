import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // eslint-disable-next-line max-len
  imgurl = 'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
  // eslint-disable-next-line @typescript-eslint/quotes
  personName ="Siva Santosh Sahukar ";
  // eslint-disable-next-line @typescript-eslint/quotes
  home="11-38c; Rainbow Apartment ";
  phnumber=8247874455;
  // eslint-disable-next-line @typescript-eslint/quotes
  address="Hyderabad, Telangana";

  constructor() {}

}
