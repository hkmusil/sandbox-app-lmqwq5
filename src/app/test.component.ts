import { Component } from '@angular/core';
import { LeftNavigationService } from '../assets/components/left-navigation';

@Component({
  selector: 'surescripts-blank',
  templateUrl: './test.component.html'
})
export class TestComponent {
  title = 'surescripts';
  pageSizes = [25, 50, 100];
  criteria = {
    pageSize: 25,
    pageIndex: 0
  };
  results = {
    items: [
      {id: "foo", name: "sso", ssoClientId: "1234", type: "asdf", description: "foobar"},
      {id: "foo", name: "sso", ssoClientId: "1234", type: "asdf", description: "foobar"}

    ],
    total: 100
  };
  constructor(private leftNavService: LeftNavigationService) {
    this.leftNavService.init();
  }
}