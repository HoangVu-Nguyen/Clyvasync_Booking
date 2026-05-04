import { HomestayStatus } from "../../enum/homestay-status";
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
  status: HomestayStatus; 
  ownerId: number;
  averageRating: number;
  reviewCount: number;
  images: string[];
  amenityIds: number[];
  reviews:ReviewResponse[];
}