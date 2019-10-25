import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Asset} from './asset';

@Injectable({
  providedIn: 'root'
})

export class HelloService {

  private id: number;
  private name: string;

  constructor(private http: HttpClient) { }


  getid(): number {
    return this.id;
  }

  setid(value: number) {
    this.id = value;
  }

  getname(): string {
    return this.name;
  }

  setname(value: string) {
    this.name = value;
  }

  getData(id): Observable<Asset> {

    return this.http.get<Asset>('http://localhost:8080/display/' + id);
  }
}

