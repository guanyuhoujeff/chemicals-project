import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';
//
// 如果soket global is not defined , Put this in your polyfills.ts  =>   (window as any).global = window
//
//

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // private url = 'http://localhost';
  private url = 'http://192.168.43.12';
  // private url = 'http://192.168.1.173';
  private socket;

  constructor(private http: Http) {}

  getMarkedContent() {
    console.log('getMarkedContent  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getMarkedContent`)
      .pipe(map((response: Response) => response.json()));
  }

  getKeyWordsCounts() {
    console.log('getKeyWordsCounts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getKeyWordsCounts`)
      .pipe(map((response: Response) => response.json()));
  }
  getKeyWordsTf() {
    console.log('getKeyWordsTf  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getKeyWordsTf`)
      .pipe(map((response: Response) => response.json()));
  }

  getR1Counts() {
    console.log('getR1Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR1Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR2Counts() {
    console.log('getR2Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR2Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR3Counts() {
    console.log('getR3Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR3Counts`)
      .pipe(map((response: Response) => response.json()));
  }

  // R21 ~~ R24
  getR21Counts() {
    console.log('getR21Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR21Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR22Counts() {
    console.log('getR22Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR22Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR23Counts() {
    console.log('getR23Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR23Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR24Counts() {
    console.log('getR24Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR24Counts`)
      .pipe(map((response: Response) => response.json()));
  }

  // R31 ~~ R34
  getR31Counts() {
    console.log('getR31Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR31Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR32Counts() {
    console.log('getR32Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR32Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR33Counts() {
    console.log('getR33Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR33Counts`)
      .pipe(map((response: Response) => response.json()));
  }
  getR34Counts() {
    console.log('getR34Counts  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR34Counts`)
      .pipe(map((response: Response) => response.json()));
  }

  //
  //  Summary
  //
  getR1Summary() {
    console.log('getR1Summary  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR1Summary`)
      .pipe(map((response: Response) => response.json()));
  }
  getR2Summary() {
    console.log('getR2Summary  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR2Summary`)
      .pipe(map((response: Response) => response.json()));
  }
  getR3Summary() {
    console.log('getR3Summary  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getR3Summary`)
      .pipe(map((response: Response) => response.json()));
  }

  // saveUser(user) {
  //   return this.http.post('http://localhost:8080/api/SaveUser/', user)
  //     .pipe(map((response: Response) => response.json()))

  // }

  // GetUser() {
  //   return this.http.get('http://localhost:8080/api/getUser/')
  //     .pipe(map((response: Response) => response.json()))

  // }
  // deleteUser(id) {
  //   return this.http.post('http://localhost:8080/api/deleteUser/', { 'id': id })
  //     .pipe(map((response: Response) => response.json()))
  // }

  //
  // Kafka
  //
  // getHandleOnlineFileTopic() {
  //   console.log('getHandleOnlineFileTopic  !!!  GET');
  //   return this.http.get(`http://192.168.43.12:8888`);
  // }

  // getHandleOnlineFileTopic() {
  //   console.log('getHandleOnlineFileTopic  !!!  GET');
  //   return this.http.get(`${this.url}:8080/api/getHandleOnlineFile`);
  // }


  postHandleOnlineFileTopic() {
    console.log('postHandleOnlineFileTopic  !!! , message', of('push'));
    return this.http.post(`${this.url}:8080/api/postHandleOnlineFileTopic`,  of('push'));
  }

  postHandleOnlineFileMonogo(message) {
    console.log('postHandleOnlineFileMonogo  !!! , message', of(message));
    return this.http.post(`${this.url}:8080/api/postHandleOnlineFileMonogo`, of(message));
  }


  getHandleOnlineFileTopic() {
    const observable = new Observable(observer => {
      // this.socket = io('http://localhost:5000');
      this.socket = io(`${this.url}:5000`);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getFinishedHandleOnlineFile() {
    console.log('getFinishedHandleOnlineFile  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getFinishedHandleOnlineFile`)
      .pipe(map((response: Response) => response.json()));
  }

  getRealTimeNewsObjectList() {
    console.log('getRealTimeNewsObjectList  !!! ');
    return this.http
      .get(`${this.url}:8080/api/getRealTimeNewsObjectList`)
      .pipe(map((response: Response) => response.json()));
  }
}
