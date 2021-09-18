import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Output() uploaded = new EventEmitter<string>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  upload(event:Event): void {
    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
  
    const data = new FormData()
    data.append('image', file);

    this.http.post(`${environment.api}/upload`, data)
      .subscribe((res: any) => {
          this.uploaded.emit(res.url);
        }
      );
  }
}
