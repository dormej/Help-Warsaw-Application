import { Component, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { ApiService } from '../api.service';
import { skipUntil, skipWhile } from 'rxjs';
import { HelpListService } from './help-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrl: './help-list.component.scss'
})
export class HelpListComponent implements OnInit {
  helpListName: string = '';
  currentDate = new Date();
  currentDate_day = this.currentDate.getDay()
  allPlaces: any;
  placeList: any;
  uniqueDistrictList: any;
  openH: any;
  openM: any;
  closeH: any;
  closeM: any;
  filtersList: any = [
    { name: 'Teraz otwarte', isActive: false},
    { name: 'Wolne miejsca', isActive: false},
  ];

  isDetailsOpen = false;
  openLunchId: number = 0;
  constructor(

    public helpListService: HelpListService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // this.helpListName = this.helpListService.currentListSignal();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.helpListName = params['name'];
      this.apiService.getAllData().subscribe((data) => {
        this.allPlaces = data;
        this.placeList = this.allPlaces[this.helpListName]


        const districtSet = new Set<any>();
        this.placeList.forEach((place: any) => {
          districtSet.add(place.district);
        });
        this.uniqueDistrictList = Array.from(districtSet);
      });
    })

    this.apiService.getAllData().subscribe((data) => {
      this.allPlaces = data;
      this.placeList = this.allPlaces[this.helpListName]


      const districtSet = new Set<any>();
      this.placeList.forEach((place: any) => {
        districtSet.add(place.district);
      });
      this.uniqueDistrictList = Array.from(districtSet);
    });
    // if (this.helpListService.currentListSignal() === 'lunch') {
    //   this.apiService.getLunch();
    // }
    // this.apiService.getLunch();
  }

  isOpen(lunch: any): boolean {
    const currentDayOfWeek = this.currentDate_day.toString();
    let daylist = lunch.openTime ? Object.keys(lunch.openTime) : '';
    if (daylist?.includes(currentDayOfWeek)) {
      let dateOpen = new Date();
      let dateClose = new Date();

      this.openH = lunch.openTime[currentDayOfWeek].open.split(':')[0]
      this.openM = lunch.openTime[currentDayOfWeek].open.split(':')[1]
      this.closeH = lunch.openTime[currentDayOfWeek].close.split(':')[0]
      this.closeM = lunch.openTime[currentDayOfWeek].close.split(':')[1]

      dateOpen.setHours(this.openH, this.openM);
      dateClose.setHours(this.closeH, this.closeM);
      if (this.currentDate >= dateOpen && this.currentDate <= dateClose) {
        return true;
      }
    }
    return false;
  }

  getPlacesForDistrict(district: any): any {
    return this.placeList.filter((data: any) => data.district === district)
  }

  openDetails(id: number): void {
    if (this.openLunchId === id) {
      this.isDetailsOpen = !this.isDetailsOpen;
    } else {
      this.openLunchId = id;
      this.isDetailsOpen = true;
    }
  }

  onFilterChanged(filter: any): void {
    console.log(filter);
    let placeNew = [];
      if (filter.name === 'Wolne miejsca' && filter.isActive) {
        placeNew = this.placeList.filter((place: any) => place.limitOfPlaces > place.takenPlaces)
      } else if (filter.name === 'Teraz otwarte' && filter.isActive) {
        this.placeList.filter((place: any) =>
        {
          if (this.isOpen(place)) {
            placeNew.push(place)
          }
          console.log(this.placeList)
          console.log(this.isOpen(place))

        })
      }
      else {
        placeNew = this.allPlaces.lunch
      }
      this.placeList = placeNew;
      console.log(placeNew)
  }

    goToDetailsList(helpListName: string): void {
      this.router.navigate(
        ['/list'],
        { queryParams: { name: helpListName },
          queryParamsHandling: 'merge'
      }
      )
    }
}
