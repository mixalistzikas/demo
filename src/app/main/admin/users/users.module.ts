import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../../core/modules/shared.module';

@NgModule({
   imports: [
      UsersRoutingModule,
      SharedModule
   ],
   declarations: [UsersComponent]
})
export class UsersModule {
}
