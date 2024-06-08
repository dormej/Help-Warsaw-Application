import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';
import { HelpListService } from '../help-list/help-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private helpListService: HelpListService,
  ) {}

  goToDetailsList(helpListName: string): void {
    this.router.navigate(['/list'],
      {
        queryParams: { name: helpListName },
        queryParamsHandling: 'merge',
        replaceUrl: true
      },
    )
  }
}
