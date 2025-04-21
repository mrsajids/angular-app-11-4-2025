import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent {
  note: any = {
    title: '',
    description: ''
  };

  setNotes(item: any) {
    const arr = this.getAllNotes();
    arr.push(item);
    localStorage.setItem('notes', arr);
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

  onSubmit(data: any): void {
    alert(JSON.stringify(data.value));
    this.setNotes(data.value);
    console.log(this.getAllNotes());
  }

}
