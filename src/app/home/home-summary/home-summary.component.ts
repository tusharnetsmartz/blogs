import { Component, OnInit } from '@angular/core';
import { IHomeSummaryApiModel } from 'src/app/shared/model/home-summary-api-model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.sass']
})
export class HomeSummaryComponent implements OnInit {
 
  cardData: IHomeSummaryApiModel[] = [];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getHomeHeaderData();
  }
  
  getHomeHeaderData(): void {
    this.sharedService.getHomeHeaderData().subscribe({
      next:(res) => {
        this.cardData = res;
      }
    })
   }
}
