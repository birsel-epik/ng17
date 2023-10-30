import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferComponent } from "../../components/defer/defer.component";
import { Defer3Component } from "../../components/defer-3/defer-3.component";
import { Defer2Component } from "../../components/defer-2/defer-2.component";

@Component({
    selector: 'app-home-cms',
    standalone: true,
    templateUrl: './home-cms.component.html',
    styleUrls: ['./home-cms.component.scss'],
    imports: [CommonModule, DeferComponent, Defer3Component, Defer2Component]
})
export class HomeCmsComponent {
  sinyal = signal(false)

  isCheckedDefer = signal(false);
}
