import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

//Interface
import { iProjects } from '../../../interface/projects.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: iProjects
  ) {}

  public getData = signal<iProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal(){
    return this._dialogRef.close()
  }
}
