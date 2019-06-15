import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/api";

  registeruser(data): Observable<any> {
    console.log(data);
    return this.http.post<any>(this.url + '/register', data)
  }

   getTeam(): Observable<any> {
    return this.http.get<any>(this.url + '/register');
  } 

  getteambyid(id): Observable<any> {
    return this.http.get<any>(this.url + '/register/' + id);
  }

  upload(file): Observable<any> {
    console.log(file);
    var imageForm = new FormData();
    var name = file.name;
    imageForm.append('pic', file, name);
    console.log(name);
    console.log(imageForm);
    return this.http.post<any>(this.url + '/uploads', imageForm)
  }

}
