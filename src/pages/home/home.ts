import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  encodeText: string = '';
  scannedData: any = {};
  encodedData: any = {};
  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
  }    
 
  scan(){
    this.barcodeScanner.scan().then((data) => {
      this.scannedData = data;
      }, (err) => {
      console.log("Error occured : " + err);
    });         
  }

  encode(){ 
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeText).then((data) => {
     this.encodedData = data;
  }, (err) => {
     console.log("Error occured : " + err);
   });                 
  }

 }
