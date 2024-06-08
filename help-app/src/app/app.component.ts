import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpListService } from './help-list/help-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClient],
})
export class AppComponent {
  title = 'help-app';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private helpListService: HelpListService
  ) {}
}
