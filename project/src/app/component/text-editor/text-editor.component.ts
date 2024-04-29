import { Component, OnInit } from '@angular/core';
import Editor from 'quill/core/editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  editor: Editor;
  constructor(){

  }

  ngOnInit(): void {
      this.editor = new Editor('#editor-container')
  }
  
}
