import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../model/acerca'

@Injectable({
  providedIn: 'root'
})
export class SAcercaService {
  expURL = 'http://localhost:8080/acerc/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Acerca []>{
   return this.httpClient.get<Acerca[]>(this.expURL + 'lista');
  }
  public ditail(id:number): Observable<Acerca>{
    return this.httpClient.get<Acerca>(this.expURL + `detail/${id}`)
  }
  public save(acerca:Acerca): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', acerca);
  }
  public update(id: number, acerca:Acerca): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, acerca);
  }
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}