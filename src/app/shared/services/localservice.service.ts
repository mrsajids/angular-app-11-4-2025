import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalserviceService {

  constructor() { }

  setNotes(item: any) {
    const arr = this.getAllNotes();
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

  updateNotes(id: string, data: any) {
    let notes = this.getAllNotes(); // Get all notes from localStorage
    const index = notes.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      notes[index].title = data.title;         // Fixed typo: "titile" ➝ "title"
      notes[index].description = data.description;
      notes[index].id = id;
    }
  
    localStorage.setItem("notes", JSON.stringify(notes)); // Save full list back
  }
  

  removeNotes(id: string) {
    let result = this.getAllNotes().filter((item: any) => item.id !== id);
    localStorage.setItem("notes", JSON.stringify(result))
  }

}
