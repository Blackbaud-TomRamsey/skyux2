import { Component } from '@angular/core';

@Component({
  selector: 'sky-guideline-action-buttons',
  templateUrl: 'guideline-action-button.component.html'
})
export class GuidelineActionButtonsComponent {
  public routes = [
    {
      name: 'Buttons and links',
      path: '/guidelines/buttons-links',
      icon: '',
      // tslint:disable-next-line
      summary: 'Describes the contexts in which to use different types of buttons and hyperlinks.'
    },
    {
      name: 'Call out information',
      path: '/guidelines/call-out-info',
      icon: '',
      // tslint:disable-next-line
      summary: 'SKYUX includes several options to highlight information and draw user attention.'
    },
    {
      name: 'Content containers',
      path: '/guidelines/content-containers',
      icon: '',
      // tslint:disable-next-line
      summary: 'Describes the contexts in which to use different types of content containers.'
    },
    {
      name: 'Filtering lists',
      path: '/guidelines/filtering-lists',
      icon: '',
      // tslint:disable-next-line
      summary: 'Filter patterns provide guidance on how to display filter options in various scenarios.'
    },
    {
      name: 'Forms',
      path: '/guidelines/forms',
      icon: '',
      // tslint:disable-next-line
      summary: 'Form patterns determine the type of form to use to meet different workflow requirements.'
    },    
    {
      name: 'Managing records',
      path: '/guidelines/managing-records',
      icon: '',
      // tslint:disable-next-line
      summary: 'Record management patterns provide guidance on how records should be added, edited and removed.'
    },
    {
      name: 'Page layouts',
      path: '/guidelines/page-layouts',
      icon: '',
      // tslint:disable-next-line
      summary: 'Responsive, mobile-first page layouts provide flexibility while conforming to SKYUX standards.'
    },
    {
      name: 'Selecting items from lists',
      path: '/guidelines/select-items',
      icon: '',
      // tslint:disable-next-line
      summary: 'A variety of controls are available to present lists and allow users to select list items.'
    },
    {
      name: 'User assistance',
      path: '/guidelines/user-assistance',
      icon: '',
      // tslint:disable-next-line
      summary: 'User assistance patterns facilitate access to help documentation and other explanatory content.'
    }
  ];
}
