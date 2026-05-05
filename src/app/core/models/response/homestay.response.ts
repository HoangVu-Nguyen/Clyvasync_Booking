import { HomestayStatus } from "../../enum/homestay-status";
import { AmenityResponse } from "./amenity.response";
import { ReviewResponse } from "./review.response";

export interface HomestayResponse {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  basePrice: number;
  maxGuests: number;
  numBedrooms: number;
  numBathrooms: number;
  longitude:string;
  latitude:string;
  status: HomestayStatus; 
  ownerId: number;
  averageRating: number;
  reviewCount: number;
  images: string[];
  amenities: AmenityResponse[];
  reviews:ReviewResponse[];
}