import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AlertController } from '@ionic/angular';

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
  public alertController: AlertController
  // private barcodeScanner: BarcodeScanner
   ) {

}
async barcodeDummyScan() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Barcode Scanner',
    message: 'Need camera input!',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

//dis removed want kort n foon
// barcodescan(){
//   this.barcodeScanner.scan().then(barcodeData => {
//     console.log("barcode scanned");
//   }).catch(err => {
//     console.log("barcode NOTscanned");
//   });
// }

  ngOnInit() {
  }

}
