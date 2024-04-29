import { Component } from '@angular/core';
import { FolderserviceService } from 'src/app/Services/folderservice.service';

@Component({
  selector: 'app-file-structure',
  templateUrl: './file-structure.component.html',
  styleUrls: ['./file-structure.component.scss']
})
export class FileStructureComponent {
  files: string[] = [];
  folders: string[] = [];
  constructor(private folderService: FolderserviceService){

  }
  fileName:string = ''
  fileContent: string= ''
  folderName: string = ' '
  createFile(fileName, fileContent){
    this.folderService.createFile(this.folderService.rootfolder, fileName, fileContent);
    this.folderService.logFolderStructure();
  }


  createFolder(folderName){
    this.folderService.createFolder(this.folderService.rootfolder, folderName);
    this.folderService.logFolderStructure();
  }
}
