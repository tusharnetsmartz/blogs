import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersGridViewComponent } from './users-grid-view/users-grid-view.component';
import { UsersListViewComponent } from './users-list-view/users-list-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    UsersComponent,
    UsersGridViewComponent,
    UsersListViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    MatSortModule,
  ],
  exports: [
    UsersGridViewComponent,
    UsersListViewComponent,
  ]
})
export class UsersModule { }
