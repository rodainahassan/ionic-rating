import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { IonRatingComponent } from "./components/ion-rating/ion-rating.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [IonRatingComponent],
  declarations: [IonRatingComponent]
})
export class IonicRatingModule {}
