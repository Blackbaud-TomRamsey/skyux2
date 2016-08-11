import { Component, OnInit } from '@angular/core';

import { SkyModalComponent, SkyModalService } from '../../../src/core';

import { ModalDemoValues } from './modal-values';

@Component({
  moduleId: module.id,
  selector: 'sky-test-cmp-modal',
  template: require('./modal-demo.component.html'),
  directives: [SkyModalComponent],
  providers: [SkyModalService]
})
export class ModalDemoComponent implements OnInit {
  public title = 'Hello world';

  constructor(private modalService: SkyModalService, public values: ModalDemoValues) { }

  public ngOnInit() {
    console.log('init happened');
  }

  public openAnother() {
    this.modalService.open(ModalDemoComponent, [
      {
        provide: ModalDemoValues,
        useValue: this.values
      }
    ]);
  }
}