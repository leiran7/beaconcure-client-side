import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesListComponent } from './components/files-list/files-list.component';
import { TablesListComponent } from './components/tables-list/tables-list.component';



const routes: Routes = [
  { path: "", redirectTo: "files", pathMatch: "full" },
  {
    path: 'files', component: FilesListComponent
  },
  {
    path: 'fileTables', component: TablesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
