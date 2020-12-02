import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {
  private baseUrl = 'http://localhost:8080/springboot/api/positions/positions'

  constructor(private  http: HttpClient) {
  }

  getPosition(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createPosition(emlpoyePosition: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, emlpoyePosition);
  }

  updatePosition(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePosition(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,
      {responseType: 'text'});
  }

  getPositionList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
