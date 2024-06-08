import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpListService {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
}
