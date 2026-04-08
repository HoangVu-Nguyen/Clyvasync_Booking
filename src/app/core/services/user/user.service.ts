import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { ApiService } from "../api/api.service";
import { UserPhotoResponse } from "../../models/response/user-photo.response";
import { ApiResponse } from "../../models/response/api.response";
import { UserHeaderResponse } from "../../models/response/user-header.response";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private apiService: ApiService) { }

    // Trong user.service.ts
    getHeaderInfo(): Observable<ApiResponse<UserHeaderResponse>> {
        return this.apiService.get<ApiResponse<UserHeaderResponse>>(`/api/v1/users/header`);
    }
}