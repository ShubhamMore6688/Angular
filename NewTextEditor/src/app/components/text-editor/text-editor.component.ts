import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [NgxEditorModule, FormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent implements OnInit{
  editor !: Editor;
  html = ''

  ngOnInit(): void {
      this.editor = new Editor();
  }
  constructor(){

  }

}
