import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ImageService, Header} from "../services/image.service";

class FileHolder {
  public serverResponse: any;
  public pending: boolean = false;
  constructor(private src: string, public file: File) { }
}


@Component({
    selector: 'photoupload',
    template: `

<div>
<h1>Photo Upload</h1>
<div class="image-upload">
</div>

  <div class="file-upload hr-inline-group">
    <label class="upload-button">
      <span>{{buttonCaption}}</span>
      <input
        type="file"
        accept="image/*"
        multiple (change)="fileChange(input.files)"
        #input>
    </label>

    
  </div>


</div>



`,
styles: [
  ],
})

export class ImageUploadComponent {
  @Input() max: number = 100;
  @Input() url: string;
  @Input() headers: Header[];
  @Input() preview: boolean = true;

  @Output()
  private isPending: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  private onFileUploadFinish: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();
  @Output()
  private onRemove: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();

  private files: FileHolder[] = [];

  private fileCounter: number = 0;
  private pendingFilesCounter: number = 0;

  private isFileOver:boolean = false;

  @Input()
  private buttonCaption: string = "Select Images";

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.setUrl(this.url);
  }
  private countRemainingSlots() {
    return this.max - this.fileCounter;
  }




  
}



