import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-users-grid-view',
  templateUrl: './users-grid-view.component.html',
  styleUrls: ['./users-grid-view.component.sass']
})
export class UsersGridViewComponent implements OnInit {
  @Output() userCountEmit = new EventEmitter();
  public users: any = [];
  public usersClone: any = [];
  subscription: Subscription;
  
  constructor(private _sharedService: SharedService) {
    this._sharedService.searchText.subscribe((value) => {
      if (value) {
        this.users = this.searchUserNameList(value, this.usersClone)
      }
      else {
        if (this.usersClone && this.usersClone.length > 0) {
          this.users = this.usersClone
        }
      }
    })
  }

  ngOnInit(): void {
    this.getUsersList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getUsersList() {
    this.subscription = this._sharedService.getUsersList().subscribe({
      next: (users) => {
        this.users = users;
        this.usersClone = users;
        this.userCountEmit.emit(users.length);

      }
    })
  }

  public selectUserNameList(query: string, listClone: any): any[] {
    const result: any[] = [];
    for (const b of listClone) {
      if (b.name.toLowerCase().includes(query) || b.email.toLowerCase().includes(query)) {
        result.push(b)
      }
    }
    return result
  }

  public searchUserNameList(query, listClone): any {
    var list;
    const d = query.toLowerCase();
    const result = this.selectUserNameList(d, listClone);
    if (query == '') {
      list = listClone;
    } else {
      list = result;
    }
    return list;
  }

}
