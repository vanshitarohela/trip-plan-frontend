export interface Restaurant {
  id: string;
  name: string;
  location: Location;
  review: Review;
  price: number;
  description: string;
  images: string[];
}

export interface Location {
    pincode: string;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    coordinates?: number[];
    link?: string;
}

export interface Review {
    reviewBody: string;
    rating: number;
}

export interface User {
  id: string;
  name: string;
  gender: Gender ;
  profilePicture?: string ;
  emailAddress: string ;
  location?: Location ;
  phoneNumber: string ;
}

export interface UserLogin {
  emailAddress: string ;
  location?: Location ;
  phoneNumber: string ;
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other"
}





export interface Root {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  rain: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Rain {
  "1h": number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
