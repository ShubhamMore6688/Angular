import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  // text: string = ''
  editorContent: string = '';
  banner: boolean = true;
  // editorConfig = {
  //   toolbar: [
  //     { name: 'clipboard', items: ['Undo', 'Redo'] },
  //     { name: 'styles', items: ['Format', 'FontSize', 'TextColor', 'BGColor'] },
  //     { name: 'alignment', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
  //     '/',
  //     { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'] },
  //     { name: 'paragraph', items: ['NumberedList', 'BulletedList', 'Outdent', 'Indent', '-', 'Blockquote'] },
  //     { name: 'links', items: ['Link', 'Unlink'] },
  //     { name: 'insert', items: ['Image', 'Table', 'HorizontalRule'] },
  //     { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
  //     { name: 'document', items: ['Source'] }
  //   ],
  //   height:'320px'
  // }

  handleBanner(){
    this.banner = !this.banner;
  }

  removeBanner(){
    if(this.banner){
      this.banner = false;
    }
  }

  playaudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio.mp3";
    audio.load();
    audio.play();
  }
}
