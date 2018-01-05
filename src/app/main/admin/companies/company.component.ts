import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-company',
   templateUrl: './company.component.html'
})

export class CompanyComponent implements OnInit {
   id: Number;
   constructor(
      private route: ActivatedRoute
   ) { }

   ngOnInit(): void {
      this.route.params.subscribe((params: any) => {
         this.id = params.id;
      });
   }
}
