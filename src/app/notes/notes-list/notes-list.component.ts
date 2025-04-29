import { Component, OnInit } from '@angular/core';
import { LocalserviceService } from '../../shared/services/localservice.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent implements OnInit {
  notes: any = [];

  constructor(private localService: LocalserviceService) {

  }
  ngOnInit(): void {
    this.notes = this.localService.getAllNotes();

  }

  removeNotes(id: string) {
    this.localService.removeNotes(id);
    this.localService.getAllNotes();
  }




}
