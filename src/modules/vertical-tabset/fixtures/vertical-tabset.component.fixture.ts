import { Component } from '@angular/core';

@Component({
  selector: 'sky-test-cmp',
  templateUrl: './vertical-tabset.component.fixture.html'
})
export class VerticalTabsetTestComponent {
  public group1Open: boolean = true;
  public group1Disabled: boolean = false;

  public group2Open: boolean = false;
  public group2Disabled: boolean = false;

  public group3Open: boolean = false;
  public group4Disabled: boolean = true;
}