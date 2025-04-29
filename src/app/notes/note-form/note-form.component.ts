import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalserviceService } from '../../shared/services/localservice.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent {
  note: any = {
    title: '',
    description: '',
    id: 0
  };
  updateflag: boolean = false;

  constructor(private router: Router, private localService: LocalserviceService) {
    const nav = this.router.getCurrentNavigation();
    const data = localService.getNote(nav?.extras?.state?.['id'] || '');
    if (data) {
      this.updateflag = true;
      this.note.title = data.title
      this.note.description = data.description
      this.note.id = data.id
    }
  }

  onSubmit(data: any): void {
    console.log(data.value)
    if (this.updateflag) {
      this.localService.updateNotes(this.note.id, this.note)
    } else {
      const id = new Date().getTime();
      this.localService.setNotes({ id: id, ...data.value });
    }
    this.router.navigate(['/notes']);
  }

}
