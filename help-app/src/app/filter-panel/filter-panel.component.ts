import { Component, EventEmitter, Input, OnInit, Output, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss'
})
export class FilterPanelComponent  implements OnInit {
  @Input() filtersList: any;
  @Output() onFilterChanged = new EventEmitter();

  filtersSignal: WritableSignal<any>  = signal([]);
  constructor() { }

  ngOnInit() {
    this.filtersSignal.set(this.filtersList);
  }

  toggleFilter(filter: any): void {
    filter.isActive = !filter.isActive;
    this.onFilterChanged.emit(filter);
  }
}
