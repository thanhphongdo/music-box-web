import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '@app/services/playlist.service';

@Component({
  selector: 'app-my-playlist-popup',
  templateUrl: './my-playlist-popup.component.html',
  styleUrls: ['./my-playlist-popup.component.scss']
})
export class MyPlaylistPopupComponent implements OnInit {
  @Input() item: any;
  @Input() id: number;
  @Output() deleteTrack = new EventEmitter();
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) { }

  ngOnInit(): void {

  }

  translate(value: any) {
    const minute = Math.floor(value / 60000);
    const second = Math.floor((value - (minute * 60000)) / 1000);
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }

  deleteTrackInPlaylist() {
    const playlistId = this.route.snapshot.paramMap.get('id')!;
    let track = {
      id: playlistId,
      trackId: this.item.id
    }
    if (confirm("Are you sure to delete track?")) {
      this.playlistService.deleteTrackInPlaylist(track).subscribe(data => {
        let reload = true;
        this.deleteTrack.emit(reload);
        this.closeModal.nativeElement.click();
      });
    }
  }
}
