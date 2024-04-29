import { Injectable } from '@angular/core';

interface File {
  name: string;
  content: string;
}

interface Folder {
  name: string;
  files: File[];
  folders: Folder[];
}

@Injectable({
  providedIn: 'root'
})
export class FolderserviceService {
  rootfolder: Folder = {
    name: 'Root',
    files: [],
    folders: []
  } 

  constructor() { }

  createFile(folder: Folder ,name: string, content: string){
    const newfile : File = {name, content};
    folder.files.push(newfile);
  }

  createFolder(folder: Folder, name: string){
    const newFolder: Folder = {
      name, files: [], folders: []
    }

    folder.folders.push(newFolder);
  }

  logFolderStructure(): void {
    console.log('Files:', this.rootfolder.files);
    console.log('Folders:', this.rootfolder.folders);
  }
}
