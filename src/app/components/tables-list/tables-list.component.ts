import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/interfaces/table';
import { FetchedFileService } from 'src/app/services/fetched-file.service';

@Component({
  selector: 'app-tables-list',
  templateUrl: './tables-list.component.html',
  styleUrls: ['./tables-list.component.css']
})
export class TablesListComponent implements OnInit {
  tableList:Table[] = [];
  fileName :string ="";
  constructor(private fetchedFile:FetchedFileService) { }

  ngOnInit(): void {
    this.tableList = this.fetchedFile.getFileTables();
    this.fileName = this.fetchedFile.getFileName();
  }

}
