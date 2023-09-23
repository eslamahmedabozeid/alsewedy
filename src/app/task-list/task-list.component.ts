import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList: any[] = [];
  tasks: { id: number; title: string; status: string; }[] | undefined;
  currentPage: number | undefined;
  itemsPerPage: number | undefined;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.taskList = this.dataService.getMockData();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.ngOnInit();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }

  selectedTab: string = 'tasks';

  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

}
