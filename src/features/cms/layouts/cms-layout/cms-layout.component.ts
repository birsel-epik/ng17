import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HomeCmsComponent} from "../../pages/home-cms/home-cms.component";

@Component({
  selector: 'app-cms-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeCmsComponent],
  templateUrl: './cms-layout.component.html',
  styleUrls: ['./cms-layout.component.scss']
})
export class CmsLayoutComponent {

}
