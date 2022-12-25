import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilesList } from '../interfaces/files-list';
import { TableList } from '../interfaces/table-list';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {
  }

  getFilesNames(){
     return this.http.get<FilesList>("http://localhost:3000/getFilesNames");
  }

  getFileContent(fileName:string){
    return this.http.get<TableList>("http://localhost:3000/getFileContent", {params:{fileName:fileName}});
 }

}
