import {NgModule} from "@angular/core";
import {CounterComponent} from "./counter/counter.component";
import {CounterButtonsComponent} from "./counter-buttons/counter-buttons.component";
import {CounterOutputComponent} from "./counter-output/counter-output.component";
import {CustomCounterInputComponent} from "./custom-counter-input/custom-counter-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CounterRoutingModule} from "./counter-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CounterRoutingModule,
    CommonModule
  ],
  exports: [],
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent
  ]
})
export class CounterModule {
}
