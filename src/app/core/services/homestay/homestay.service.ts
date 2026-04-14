import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { ApiService } from "../api/api.service";
import { UserPhotoResponse } from "../../models/response/user-photo.response";
import { ApiResponse } from "../../models/response/api.response";
import { HomestayResponse } from "../../models/response/homestay.response";
import { PageResponse } from "../../models/response/page.response";

@Injectable({ providedIn: 'root' })
export class HomestayService {
    constructor(private apiService: ApiService) { }

   getAllHomestays(): Observable<ApiResponse<PageResponse<HomestayResponse>>> {
    return this.apiService.get<ApiResponse<PageResponse<HomestayResponse>>>(`/api/v1/homestays/search`)
        .pipe(
            map(response => response) 
        );
}
}