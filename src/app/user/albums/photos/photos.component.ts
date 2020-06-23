import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Photo } from '../../models/photo';
import { UserInformationService } from '../../user-information.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos$: Observable<Photo[]>;

  constructor(
    private route: ActivatedRoute,
    private httpPhotos: UserInformationService) { }

  ngOnInit(): void {
    this.photos$ = this.route.paramMap.pipe(
      switchMap(params => {
        let albumId = params.get('albumId');
        return this.httpPhotos.getPhotos(albumId);
      })
    );
  }

}
