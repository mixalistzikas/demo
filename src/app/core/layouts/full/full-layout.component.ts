import { Component } from '@angular/core';

@Component({
   selector: 'app-full-layout',
   templateUrl: './full-layout.component.html',
   styles: [`
      div{
         border: solid 10px red;
         padding: 50px;
      }
      ul{
         padding-left: 0;
         margin-left: 0;
      }
      ul li {
         display: inline-block;
      }
   `]
})

export class FullLayoutComponent {
   constructor() { }
}
