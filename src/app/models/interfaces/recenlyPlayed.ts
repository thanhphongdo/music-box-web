enum TYPE { track = 1, playlist = 2 }

export interface RecentlyPlayed {
  id?: string;
  playedAt?: Date;
  type?: TYPE.track | TYPE.playlist;
  detailInfo?: {};
}

export interface RequestRecentlyPlayed {
  id: string;
  type: TYPE.track | TYPE.playlist;
  detailInfo: {};
}

export interface listRecentlyPlayed {
  today: Array<RecentlyPlayed>;
  lastday: Array<RecentlyPlayed>;
  last7days: Array<RecentlyPlayed>;
  last30days: Array<RecentlyPlayed>;
}
