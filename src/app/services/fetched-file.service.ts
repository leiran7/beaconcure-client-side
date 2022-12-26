import { Injectable } from '@angular/core';
import { Table } from '../interfaces/table';

@Injectable({
  providedIn: 'root'
})
export class FetchedFileService {
  constructor() { }
  fileTables:Table[] = [];
  fileName= "";

  setFileTables(fileTables: Table[], fileName:string){
    this.fileTables = fileTables;
    this.fileName = fileName;
  }

  getFileTables(): Table[]{
    return this.fileTables;
  }

  getFileName(): string{
    return this.fileName;
  }
}
