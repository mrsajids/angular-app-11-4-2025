import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NotesListComponent, NoteItemComponent, NoteFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
