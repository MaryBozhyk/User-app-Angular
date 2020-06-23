import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Album } from '../models/albums';
import { UserInformationService } from '../user-information.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]>;

  constructor(
    private route: ActivatedRoute,
    private httpAlbums: UserInformationService) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.albums$ = this.httpAlbums.getAlbums(id);
  }

}
