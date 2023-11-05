export interface TopRatedData {
  data: TopRated[];
}

export interface TopRated {
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
