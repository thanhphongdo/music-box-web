import { TrackInterface } from "./search";

export interface Playlist {
  id?: string;
  title?: string;
  description?: string;
  tracks: Array<TrackInterface>;
}

export interface RequestCreatePlaylist {
  title?: string;
  description?: string;
}

export interface listPlaylist {
  data?: Array<Playlist>
}
