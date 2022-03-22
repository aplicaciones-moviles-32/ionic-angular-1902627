import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdatosService } from '../bdatos.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private http: HttpClient, private db: BdatosService) { }

  ngOnInit(): void {
    this.db.getFeed().subscribe(res => {this.publicaciones = res})
  }

  publicaciones: any
}
