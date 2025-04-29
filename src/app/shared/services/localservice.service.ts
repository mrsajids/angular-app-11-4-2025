import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalserviceService {

  constructor() { }

  setNotes(item: any) {
    const arr = this.getAllNotes();
    // let arr = [];
    arr.push(item);
    localStorage.setItem('notes', JSON.stringify(arr));
  }

  getNote(id: string) {
    const list = JSON.parse(localStorage.getItem('notes') || '[]');
    const note = list.find((item: any) => item.id === id);
    return note;
  }

  getAllNotes() {
    let list = JSON.parse(localStorage.getItem('notes') || '[]');
    return list;
  }

}
