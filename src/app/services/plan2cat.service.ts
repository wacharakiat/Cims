import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType
 } from '@angular/common/http';

@Injectable()
export class Plan2catService {

  constructor(private http: HttpClient) {}
  
  getPlan2Cat() {
    const req = new HttpRequest('GET', 'http://api.hbc.in.th/api/plan2cat', {
      reportProgress: true
    });
    this.http.request(req).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request sent!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header received');
        case HttpEventType.DownloadProgress:
          console.log('Download in progress! ${ KbLoaded }Kb loaded');
          break;
        case HttpEventType.Response:
          console.log('😺 Done!', event.body);
      }
    });
  } 
}
