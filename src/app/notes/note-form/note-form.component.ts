import { Component } from '@angular/core';

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

  onSubmit(data: any): void {
  alert(JSON.stringify(data.value));
  console.log(this.note);
  

  }

}
