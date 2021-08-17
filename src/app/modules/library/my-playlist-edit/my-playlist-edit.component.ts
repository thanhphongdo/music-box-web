import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '@app/services/playlist.service';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-my-playlist-edit',
  templateUrl: './my-playlist-edit.component.html',
  styleUrls: ['./my-playlist-edit.component.scss']
})
export class MyPlaylistEditComponent implements OnInit {
  @Output() updateCurrentPlaylist = new EventEmitter();
  formUpdatePlaylist!: FormGroup;
  currentPlaylist!: any;
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private playlistService: PlaylistService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.formUpdatePlaylist = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.getMyPlaylistById();
  }

  getMyPlaylistById() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.playlistService.getMyPlaylistById({ id: id }).subscribe(data => {
      this.currentPlaylist = data as any;
      this.formUpdatePlaylist.get('title').setValue(this.currentPlaylist.title);
      this.formUpdatePlaylist.get('description').setValue(this.currentPlaylist.description);
    }, err => {
      console.log(err);
    })
  }

  updatePlaylist() {
    if (this.formUpdatePlaylist.invalid) {
      return;
    }

    let playlist = {
      idPlaylist: this.currentPlaylist.objectId,
      title: this.formUpdatePlaylist.value.title,
      description: this.formUpdatePlaylist.value.description,
    }

    this.playlistService.updatePlaylist(playlist).subscribe(data => {
      this.updateCurrentPlaylist.emit(data)
      this.closeModal.nativeElement.click();
    }, err => {
      console.log(err)
    })
  }
}
