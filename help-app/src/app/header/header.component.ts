import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent  implements OnInit {
  data: any;
  helpListName: string = '';

  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) {
    // this.helpListName = this.helpListService.currentListSignal();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.helpListName = params['name'];
    });
    this.router.url
  }



  getHelpLstName(): any {
    switch (this.helpListName) {
      case 'lunch': return 'jadłodajnie';
      case 'shelter': return 'noclegownie';
      case 'heating': return 'ogrzewalnie';
      case 'shower': return 'łaźnie';
    }
  }
}
