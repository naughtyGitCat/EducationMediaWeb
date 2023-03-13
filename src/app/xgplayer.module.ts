import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ENgxXGPlayerComponent } from "./xgplayer.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ENgxXGPlayerComponent],
  exports: [CommonModule, ENgxXGPlayerComponent]
})

export class ENgxXGPlayerModule{

}
