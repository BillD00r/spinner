import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  public errortext = 'you did not enter "ok"';
  public loading: boolean;
  public waitingForInput: boolean;
  public error: boolean;

  constructor(
    public dialogRef: MatDialogRef<OverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    this.waitingForInput = true;
    this.loading = false;
    this.error = false;
  }

  onClick(): void {
    this.waitingForInput = false;
    this.loading = true;
    this.dialogRef.disableClose = true;

    setTimeout(() => {
      this.loading = false;
      this.error = this.data !== 'ok';
      if(this.error) {
        setTimeout(() => {
          this.waitingForInput = true;
          this.dialogRef.disableClose = false;
          this.data = '';
          this.loading = false;
          }, 1500);
      } else {
        setTimeout(() => {
          this.dialogRef.close(this.data);
        }, 2000);
      }
    }, Math.floor(Math.random() * 6000) + 1000
    );
  }
}
