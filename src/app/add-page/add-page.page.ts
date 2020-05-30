import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NavController } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {

// store the scanned result
num: string;

// DI barcodeScanner
constructor(public navCtrl: NavController, 
   ) {

}


// new scan method
// scan() {
//   this.barcodeScanner.scan().then(data => {
//       // this is called when a barcode is found
//       this.num = data.text
//     });      
// }

  ngOnInit() {
  }

}
