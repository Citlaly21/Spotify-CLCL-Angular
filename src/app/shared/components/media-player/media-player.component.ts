import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: any={
  cover:'https://lh3.googleusercontent.com/6VPrwdG4vFmC46cbQUPWyFOOcE5qt9E3__xB15y_sJ_Wu4zcdjspunoPGq9zKWdnMnsc6KW4QN6LItxOuQ=w544-h544-l90-rj',
  album:'Cigarettes After Sex',
  name:'Nothing´s Gonna Hurt You Baby'
}
  constructor() { }

  ngOnInit(): void {
  }

}
