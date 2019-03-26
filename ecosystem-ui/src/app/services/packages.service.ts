import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PackageList } from '../interfaces/package';

@Injectable({ providedIn: 'root' })
export class PackagesService {
  constructor(protected http: HttpClient) {}

  getPackages(category?: string): Observable<PackageList> {
    const base = 'http://localhost:3000/api/v1/packages';
    const url = !!category ? `${base}/${category}` : base;

    return this.http.get<PackageList>(url);
  }
}
