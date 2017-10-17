import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  constructor() {

  }

  getNames() {
    return ['Bubbles', 'Blossom', 'Buttercup'];
  }
}
