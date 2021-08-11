import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '@app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  // Manage Popup player display
  @Input() showPlayerPopup: boolean;
  @Output() showPlayerPopupClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  isMobile: boolean;
  isControlEvent: boolean = false;
  dataLoaded: Observable<boolean> = this.playerService.hadData$;
  track = {"artwork_url":"https://i1.sndcdn.com/artworks-000233434893-n4xs0d-large.jpg","caption":null,"commentable":true,"comment_count":9095,"created_at":"2015-05-21T16:36:39Z","description":"Support on iTunes: http://smarturl.it/SILKSF099\nFollow Silk Music: silkmusic.lnk.to/listen\n\nWhy [Follow] our SoundCloud?\nWe stream all of our new releases and radio shows on our SoundCloud.\n\nEnjoying the tune? Please consider clicking the [Repost] ↻ button!\n---\n▼ Follow Silk Music:\nSupport on YouTube: http://bit.ly/SilkMusicTV\nSupport on Facebook: http://bit.ly/SilkFacebook\nFollow on Twitter: http://bit.ly/SilkTwitter\nListen on SoundCloud: http://bit.ly/SilkSoundCloud\nFollow on Google+: http://bit.ly/SilkGooglePlus\n---\n▼ Visit our website:\nhttp://www.silk-music.com\n\n---\n▼ Follow Delectatio:\nSoundCloud: http://soundcloud.com/delectatiomusic\nFacebook: http://facebook.com/delectatiomusic\n---\n▼ Release Tracklist:\n01 Delectatio - Numinous\n02 Delectatio - Be Free\n03 Delectatio - Remember\n04 Delectatio - Latibule\n\nPortuguese artist Delectatio is a new signing to Silk Sofa. His EP, \"Sunrise\", features four unique and unforgettable downtempo cuts.\n\n\"Numinous\" starts with intriguing guitar riffs and enjoyable melodies on top. Soon, intricate percussion elements as well as hypnotizing vocal stems emerge, while the delightful theme melody continues to liven up the soundscape. A blissful guitar line and soothing percussion elements introduce \"Be Free\". Fascinating vocal stems are added later, thereby adding an extra layer of delicate and refreshing textures. \"Remember\" begins with a stunning atmosphere, including a number of lush synths and an intricate bassline. A mesmerizing arpeggio melody emerges later, and numerous sound effects continuously spice up the soundscape. The final song in this package is \"Latibule\". Beautiful melodies are quickly established, and multiple new layers are added on top, as the song progresses. The soothing breakbeat comforts the listener even further.\n---\n▼ Photography:\nPhotographer: Sorin B.\nWebsite: http://www.flickr.com/photos/sorin-bogdan","downloadable":false,"download_count":0,"duration":290116,"full_duration":290116,"embeddable_by":"all","genre":"Chillout","has_downloads_left":false,"id":206559958,"kind":"track","label_name":"Silk Sofa Music","last_modified":"2021-08-07T06:03:42Z","license":"all-rights-reserved","likes_count":163463,"permalink":"silksf099-1","permalink_url":"https://soundcloud.com/monstercatsilk/silksf099-1","playback_count":12054738,"public":true,"publisher_metadata":{"id":206559958,"urn":"soundcloud:tracks:206559958","artist":"Delectatio","album_title":"Sunrise","contains_music":true,"publisher":"Proton LLC","upc_or_ean":"8535640000001","isrc":"US83Z1512266","writer_composer":"Tiago Silva","release_title":"Numinous"},"purchase_title":null,"purchase_url":"http://itunes.apple.com/us/album/sunrise-ep/id993328519","release_date":"2015-05-20T00:00:00Z","reposts_count":5007,"secret_token":null,"sharing":"public","state":"finished","streamable":true,"tag_list":"ambient idm downtempo atmospheric melodic illbient cinematic delectatio numinous \"silk sofa\" \"silk music\"","title":"Delectatio - Numinous [Silk Music]","track_format":"single-track","uri":"https://api.soundcloud.com/tracks/206559958","urn":"soundcloud:tracks:206559958","user_id":2065244,"visuals":null,"waveform_url":"https://wave.sndcdn.com/Hybhx411eh15_m.json","display_date":"2015-05-21T16:36:39Z","media":{"transcodings":[{"url":"https://api-v2.soundcloud.com/media/soundcloud:tracks:206559958/7db11b0e-cb30-4a1f-a11c-e5bbb0a4d4b9/stream/hls","preset":"mp3_0_0","duration":290116,"snipped":false,"format":{"protocol":"hls","mime_type":"audio/mpeg"},"quality":"sq"},{"url":"https://api-v2.soundcloud.com/media/soundcloud:tracks:206559958/7db11b0e-cb30-4a1f-a11c-e5bbb0a4d4b9/stream/progressive","preset":"mp3_0_0","duration":290116,"snipped":false,"format":{"protocol":"progressive","mime_type":"audio/mpeg"},"quality":"sq"}]},"station_urn":"soundcloud:system-playlists:track-stations:206559958","station_permalink":"track-stations:206559958","track_authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJnZW8iOiJWTiIsInN1YiI6IiIsInJpZCI6IjU4YjRkOGZkLTdjNzktNDNhZC04YjFiLWI4ODYwMTY0OWVlOSIsImlhdCI6MTYyODM2NTc4N30.c8eJp0a4KZ0Lfcs2vUX2_QDGdjcbH0_bbFUCx1-7AUQ","monetization_model":"NOT_APPLICABLE","policy":"ALLOW","user":{"avatar_url":"https://i1.sndcdn.com/avatars-YxgnzSzx9q0TVP9D-yx7CaA-large.jpg","first_name":"","followers_count":49478,"full_name":"","id":2065244,"kind":"user","last_modified":"2021-02-19T22:25:29Z","last_name":"","permalink":"monstercatsilk","permalink_url":"https://soundcloud.com/monstercatsilk","uri":"https://api.soundcloud.com/users/2065244","urn":"soundcloud:users:2065244","username":"Monstercat Silk","verified":true,"city":"LA","country_code":"US","badges":{"pro":false,"pro_unlimited":true,"verified":true},"station_urn":"soundcloud:system-playlists:artist-stations:2065244","station_permalink":"artist-stations:2065244"}};
  // Manage slider
  sliderValue: number = 3000;
  sliderOptions: Options = {
    floor: 0,
    ceil: 123000,
    autoHideLimitLabels: false,
    animate: false,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      return '#2DCEEF';
    },
    getPointerColor: (value: number): string => {
      return '#2DCEEF';
    },
    translate: (value: number): string => {
      const minute = Math.floor(value / 60000);
      const second = Math.floor((value - (minute * 60000)) / 1000);
      return `${minute}:${second < 10 ? '0' + second : second}`;
    }
  };
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.checkMobile();
    
  }
  
  showPlayer() {
    if (this.isControlEvent) return;
    this.showPlayerPopup = true;
    this.showPlayerPopupClick.emit(this.showPlayerPopup);
  }

  checkControlEvent(isControlEvent: boolean) {
    this.isControlEvent = isControlEvent;
  }

  private checkMobile() {
    this.isMobile = window.innerWidth <  769;
  }
}
