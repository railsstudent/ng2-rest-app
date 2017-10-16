import { Component, OnInit } from '@angular/core';
import { GizmoService } from '../shared/index';

@Component({
  selector: 'app-gizmo',
  templateUrl: './gizmo.component.html',
  styleUrls: ['./gizmo.component.css']
})
export class GizmoComponent implements OnInit {

  message: string = 'Gizmo component is created by Angular-CLI';

  hello: string = '';

  constructor(private gizmo: GizmoService) { }

  ngOnInit() {
    this.hello = this.gizmo.helloName('Connie');
  }

}
