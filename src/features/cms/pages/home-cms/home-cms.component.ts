import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferComponent} from "../../components/defer/defer.component";
import {Defer3Component} from "../../components/defer-3/defer-3.component";
import {Defer2Component} from "../../components/defer-2/defer-2.component";
import {first} from "rxjs";

@Component({
  selector: 'app-home-cms',
  standalone: true,
  templateUrl: './home-cms.component.html',
  styleUrls: ['./home-cms.component.scss'],
  imports: [CommonModule, DeferComponent, Defer3Component, Defer2Component]
})
export class HomeCmsComponent {
  signal = signal(false)
  isChecked = signal(true)

  num = signal(58)

  isCheckedDefer = signal(false);

  collection = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'}
  ];

  emptyCollection: any = [];

  radioValue = signal(0);

  protected readonly first = first;
  even: string | undefined;
  odd: string | undefined;
}

