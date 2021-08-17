import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackInterface } from '@app/models';
import { PlaylistService } from '@app/services/playlist.service';

@Component({
  selector: 'app-my-playlist-create',
  templateUrl: './my-playlist-create.component.html',
  styleUrls: ['./my-playlist-create.component.scss']
})
export class MyPlaylistCreateComponent implements OnInit {
  formCreatePlaylist!: FormGroup;
  @Input() id: any;
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(private router: Router, private formBuilder: FormBuilder, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.formCreatePlaylist = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createPlaylist() {
    if (this.formCreatePlaylist.invalid) {
      return;
    }

    let playlist = {
      title: this.formCreatePlaylist.value.title,
      description: this.formCreatePlaylist.value.description,
    }

    this.playlistService.createPlaylist(playlist).subscribe(data => {
      let playlist = data as any;
      this.closeModal.nativeElement.click();
      this.formCreatePlaylist.reset();
      this.router.navigate(['/library/playlists/' + playlist.objectId]);
    }, err => {
      console.log(err)
    })
  }
}

