import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { ApiService } from "../api/api.service";
import { UserPhotoResponse } from "../../models/response/user-photo.response";
import { ApiResponse } from "../../models/response/api.response";

@Injectable({ providedIn: 'root' })
export class UserPhotoService {
    constructor(private apiService: ApiService) { }

    getAvatar(): Observable<ApiResponse<UserPhotoResponse>> {
        return this.apiService.get<ApiResponse<UserPhotoResponse>>(`/api/v1/user-photos/avatar`)
            .pipe(
                map(response => response!) 
            );
    }
}