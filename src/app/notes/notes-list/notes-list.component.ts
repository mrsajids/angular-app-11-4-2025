import { Component, OnInit } from '@angular/core';
import { LocalserviceService } from '../../shared/services/localservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent implements OnInit {
  notes: any = [];

  constructor(private localService: LocalserviceService, private router: Router) {

  }
  ngOnInit(): void {
    this.notes = this.localService.getAllNotes();

  }

  updateNotes(id: string) {
    this.router.navigate(['/notes/new'], {
      state: { id }  // Pass via history state
    })
  }

  removeNotes(id: string) {
    this.localService.removeNotes(id);
    this.notes = this.localService.getAllNotes();
  }




}
