import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {customerIncrement, changeAlias} from "../state/counter.actions";
import {getAlias} from "../state/counter.selectors";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: any;
  alias: string | undefined;

  constructor(private store: Store<{ counterReducer: CounterState }>) {
  }

  ngOnInit(): void {
    this.store.select(getAlias)
      .subscribe((alias) => {
        this.alias = alias;
      });
  }

  add() {
    this.store.dispatch(customerIncrement({value: this.value}));
  }

  changeAlias() {
    this.store.dispatch(changeAlias())
  }
}
