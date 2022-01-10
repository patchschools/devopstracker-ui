import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) { }

  getSites1(){
    const url ="https://devopstracker-api.herokuapp.com/api/v1/sites";
    return this.http.get(url);
  }

  getSites(){
    const token  = "HzddrpzLRYYHGHh1Ohxkxr2bUGArcCvDYveRoS5A7K2esAJufMGmRzcRc7DCXsyC";
    const url = "https://data.mongodb-api.com/app/data-pyska/endpoint/data/beta/find";
    const data = { "collection": "courses", "database":"coursetracker_db", "dataSource":"projecttracker"};
    return this.http.post(url, data, { headers:{"api-key":token}})

  }
}
