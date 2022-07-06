import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersPipe } from '../users.pipe';
import { UsersDirective } from '../users.directive';



@NgModule({
  declarations: [
    UsersComponent,
    UsersPipe,
    UsersDirective,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
