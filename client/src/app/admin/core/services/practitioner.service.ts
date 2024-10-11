import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Practitioner as IPractitioner} from "../interfaces/practitioner.interface";
import {map, tap, Observable, Subject} from "rxjs";
import {GetPractitionerResponse, GetPractitionersResponse} from "../interfaces/response.interface";


@Injectable({
  providedIn: 'root'
})
export class PractitionerService {

  BASE_URL = "http://127.0.0.1:3000/api/practitioners";
  http: HttpClient = inject(HttpClient);

  private _data: Subject<IPractitioner[]> = new Subject<IPractitioner[]>();

  constructor() {
  }

  public get data(): Observable<IPractitioner[]> {
   return this._data.asObservable();
  }

  getAll(): Observable<IPractitioner[]> {
   return  this.http.get<GetPractitionersResponse>(this.BASE_URL).pipe(
      tap(response => this._data.next(response.practitioners)),
      map((response: GetPractitionersResponse) => {
        return response.practitioners;
      })
    );
  }

  getOne(id: string): Observable<IPractitioner> {
    return this.http.get<GetPractitionerResponse>(this.BASE_URL + '/' + id).pipe(
      map((response: GetPractitionerResponse) => {
        return response.practitioner;
      })
    );
  }
}
