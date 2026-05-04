import { Injectable, signal } from "@angular/core";
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'; // Import the map operator
import { ApiService } from "../api/api.service";
import { UserPhotoResponse } from "../../models/response/user-photo.response";
import { ApiResponse } from "../../models/response/api.response";
import { HomestayResponse } from "../../models/response/homestay.response";
import { PageResponse } from "../../models/response/page.response";

@Injectable({ providedIn: 'root' })
export class HomestayService {
    constructor(private apiService: ApiService) { }
    private currentHomestaySignal = signal<HomestayResponse | null>(null);
    readonly currentHomestay = this.currentHomestaySignal.asReadonly();

    getAllHomestays(): Observable<ApiResponse<PageResponse<HomestayResponse>>> {
        return this.apiService.get<ApiResponse<PageResponse<HomestayResponse>>>(`/api/v1/homestays/search`)
            .pipe(
                map(response => response)
            );
    }
    getHomestayById(id: number): Observable<ApiResponse<HomestayResponse>> {
        return this.apiService.get<ApiResponse<HomestayResponse>>(`/api/v1/homestays/${id}`)
            .pipe(
                tap(response => {
                    if (response.success) {
                        this.currentHomestaySignal.set(response.data);
                    }
                })
            );
    }
    
    getCurrentData() {
        return this.currentHomestaySignal();
    }

}