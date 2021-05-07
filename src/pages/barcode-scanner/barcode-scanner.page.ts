import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-barcode-scanner',
  templateUrl: 'barcode-scanner.page.html',
  styleUrls: ['barcode-scanner.page.scss']
})
export class BarcodeScannerPage {
    public barcodeNumber: any;
    constructor(private barcodeScanner: BarcodeScanner) {}



    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.barcodeNumber = barcodeData.text;


            console.log('Barcode data', barcodeData);
        }).catch(err => {
            console.log('Error', err);
        });
    }

   



}
