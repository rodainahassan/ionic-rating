import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common'

import { RatingComponent } from "./components/rating";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [RatingComponent],
  declarations: [RatingComponent]
})
export class IonicRatingModule {}
