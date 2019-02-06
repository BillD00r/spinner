import {Component} from '@angular/core';
import {OverlayComponent} from './overlay/overlay.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loading: boolean;
  public done: boolean;
  public success: boolean;

  public ok: boolean;
  gaugeType = 'semi';
  gaugeValue = 0.0;
  gaugeLabel = 'Speed';
  gaugeAppendText = 'km/h';

  onClickError(): void {
    this.loading = false;
    this.done = true;
    this.success = false;
  }

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OverlayComponent, {
      width: '50%',
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed - ' + result);
      this.ok = result === 'ok';
    });
  }

  displayForm(): void {
    this.openDialog();
  }
}
