import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  get message(): string {
    return 'Hello World!';
  }
}
