import { Injectable } from '@angular/core';

@Injectable()
export class GizmoService {

  constructor() { }

  helloName(name: string) {
    return `Hello ${name}`;
  }
}
