import { Injectable } from '@angular/core';
import { Table } from '../interfaces/table';

@Injectable({
  providedIn: 'root'
})
export class FetchedFileService {
  constructor() { }
  fileTables:Table[] = [];

  setFileTables(fileTables: Table[]){
    this.fileTables = fileTables;
  }

  getFileTables(): Table[]{
    return this.fileTables;
  }
}
