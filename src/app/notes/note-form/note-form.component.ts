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
    description: ''
  };
  @Input() receivedData: string | undefined;

  constructor(private router: Router, private localService: LocalserviceService) {
    const nav = this.router.getCurrentNavigation();
    console.log(nav?.extras?.state?.['id'] || '');
    
  }

  onSubmit(data: any): void {
    console.log(data.value)
    const id = new Date().getTime();
    this.localService.setNotes({ id: id, ...data.value });
    console.log(this.localService.getAllNotes());
    this.router.navigate(['/notes']);
  }

}
