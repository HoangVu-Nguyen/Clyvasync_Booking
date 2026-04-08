import { ImageType } from "../../enum/image-type.enum";

export interface UserPhotoResponse {
    id?: string;
    userId: string;
    photoUrl: string;
    photoType: ImageType
    isCurrent: boolean;
    createdAt: string;

}