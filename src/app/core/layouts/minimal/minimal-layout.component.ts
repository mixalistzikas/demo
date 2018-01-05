import { Component } from '@angular/core';

@Component({
   selector: 'app-minimal-layout',
   templateUrl: './minimal-layout.component.html',
   styles: [`
      div{
         border: solid 10px gray;
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

export class MinimalLayoutComponent {
   constructor() { }
}
