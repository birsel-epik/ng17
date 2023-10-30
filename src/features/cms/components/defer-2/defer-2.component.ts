import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-2.component.html',
  styleUrls: ['./defer-2.component.scss']
})
export class Defer2Component {
  @Input() text = 'test defer 2';

}
