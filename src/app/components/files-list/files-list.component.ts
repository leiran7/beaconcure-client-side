import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FilesList } from 'src/app/interfaces/files-list';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css'],
})
export class FilesListComponent implements OnInit {
  filesNames:string[] = [];
  isDataLoaded = false;
  constructor(private data: DataService) {}
   ngOnInit() {
     this.data.getFilesNames().subscribe((data:FilesList) => {
      this.filesNames = data.filesNames;
      this.isDataLoaded = true;
    });
  }
}
