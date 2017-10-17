import {Injectable} from '@angular/core';
import {widgets} from './widget.model';
import {HelperService} from './helper.service';

@Injectable()
export class WidgetsService {

  constructor(private helper: HelperService) {

  }

  getWidgets() {
    return widgets;
  }

  getPowerpuffGirls() {
    return this.helper.getNames();
  }
}
