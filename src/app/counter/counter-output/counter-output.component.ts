import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getCounter} from "../state/counter.selectors";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counterValue: any;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.counterValue = this.store.select(getCounter)
  }
}

