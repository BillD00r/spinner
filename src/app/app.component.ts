import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public done: boolean;
  public success: boolean;

  onClickError(): void {
    this.done = true;
    this.success = false;
  }

  onClickDone(): void {
    this.done = true;
    this.success = true;
  }

  reset(): void {
    this.done = false;
    this.success = false;
  }
}
