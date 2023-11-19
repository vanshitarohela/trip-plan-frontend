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

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other"
}