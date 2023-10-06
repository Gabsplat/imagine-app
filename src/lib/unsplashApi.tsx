import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

// Partial -> todas las keys opcionales
type Photo = Partial<{
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
  };
  current_user_collections: [
    {
      id: number;
      title: string;
      published_at: string;
      last_collected_at: string;
      updated_at: string;
      cover_photo: string | null;
      user: string | null;
    }
  ];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}>;

const headers = {
  Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
};

export async function getPhotos(): Promise<Photo[]> {
  return axios
    .get("https://api.unsplash.com/photos?page=1", { headers })
    .then((res) => res.data as Array<Photo>);
}

export async function getRandomPhoto(): Promise<Photo> {
  return axios
    .get("https://api.unsplash.com/photos/RsRTIofe0HE", { headers })
    .then((res) => res.data as Photo);
}
