import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-3.component.html',
  styleUrls: ['./defer-3.component.scss']
})
export class Defer3Component {
  @Input() text = 'test defer 3';

}
