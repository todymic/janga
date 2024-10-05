import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  slug(text: string) {
    return text.trim().replace(/[\s]/g, '-').toLowerCase();
  }
}
