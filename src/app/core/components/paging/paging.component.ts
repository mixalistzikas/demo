import { Component, Input, OnInit } from '@angular/core';

@Component({
   selector: 'paging',
   styles: [`
      li{
         display:inline-block;
         padding: 3px 7px;
         border: solid 1px #5a5a5a;
      }
   `],
   template: `
   <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
   </ul>
   `
})
export class PagingComponent {

   constructor() {
   }

}
