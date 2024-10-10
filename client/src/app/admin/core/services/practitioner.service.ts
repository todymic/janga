import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Practitioner} from "../models/practitioner.model";
import {Practitioner as IPractitioner} from "../interfaces/practitioner.interface";
import {map, Observable} from "rxjs";
import {GetPractitionersResponse} from "../interfaces/response.interface";


interface Response {

}

@Injectable({
  providedIn: 'root'
})
export class PractitionerService {

  BASE_URL = "http://127.0.0.1:3000/api/practitioners"
  http: HttpClient = inject(HttpClient)

  constructor() {
  }

  getAll(): Observable<IPractitioner[]> {
   return  this.http.get<GetPractitionersResponse>(this.BASE_URL).pipe(
      map((response: GetPractitionersResponse) => {
        return response.practitioners;
      })
    );
  }
}
