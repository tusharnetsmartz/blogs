import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  isGridView: boolean = false;
  searchText: string = "";
  userCount: number = 0;

  constructor(public _sharedService: SharedService) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
    this._sharedService.setSearchTextValue(this.searchText);
  }

  getUserCount(value:number) {
    this.userCount = value;
  }

  clearSearchbox() {
    this.searchText = '';
    this._sharedService.setSearchTextValue("");
  }
  
}
