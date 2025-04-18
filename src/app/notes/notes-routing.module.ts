import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteFormComponent } from './note-form/note-form.component';

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent,
  },
  {
    path: ':id',
    component: NoteItemComponent,
  },
  {
    path: 'new',
    component: NoteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
