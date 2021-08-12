enum TYPE { track = 1, playlist = 2 }

export interface RecentlyPlayed {
  id?: string;
  playedAt?: Date;
  type?: TYPE.track | TYPE.playlist;
  detailInfo?: {};
}

export interface RequestRecentlyPlayed {
  id: string;
  playedAt: Date;
  type: TYPE.track | TYPE.playlist;
  detailInfo: {};
}

export interface listRecentlyPlayed {
  data: Array<RecentlyPlayed>;
  page: number;
  perpage: number;
  totalRow: number;
}
