import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs/operators';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=0546bff701195785044f667e7dc00585");
  }

  getsMoviesDetails(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}popular?api_key=0546bff701195785044f667e7dc00585`);
  }
}
