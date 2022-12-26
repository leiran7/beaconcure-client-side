import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FetchedFileService } from 'src/app/services/fetched-file.service';
import { Table } from 'src/app/interfaces/table';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.css'],
})
export class FileCardComponent implements OnInit {
  @Input() fileName!: string;
  loadingData: boolean = false;
  constructor(
    private data: DataService,
    private router: Router,
    private fetchedFile: FetchedFileService
  ) {}

  ngOnInit(): void {}

  fileClicked(): void {
    this.loadingData = true;
    this.data.getFileContent(this.fileName).subscribe((data) => {
      this.fetchedFile.setFileTables(data.tables,this.fileName);
      this.router.navigateByUrl('/fileTables');
      this.loadingData = false;
    });
  }
}
