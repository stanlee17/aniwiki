export interface AnimeData {
  data: Anime[];
}

export interface Anime {
  mal_id: number;
  title: string;
  url: string;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
}

export interface Characters {
  
}

export interface Bookmarks {
  mal_id: number;
  title: string;
  image: string; 
}
