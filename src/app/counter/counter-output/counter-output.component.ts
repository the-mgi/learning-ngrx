import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable} from "rxjs";
import {getCounter} from "../state/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counterValue: any;

  constructor(private store: Store<{ counterReducer: CounterState }>) {
  }

  ngOnInit(): void {
    this.counterValue = this.store.select(getCounter)
  }
}

