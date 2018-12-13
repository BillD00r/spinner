import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loading: boolean;
  public done: boolean;
  public success: boolean;

  onClickError(): void {
    this.loading = false;
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

  simulateSuccess(): void {
    this.loading = true;
    setTimeout(() => {
      this.done = true;
      this.success = true;
      setTimeout(() => {
        this.loading = false;
        this.done = false;
      }, 4000);
    }, 3000);
  }

  simulateError(): void {
    this.loading = true;
    setTimeout(() => {
      this.done = true;
      this.success = false;
      setTimeout(() => {
          this.loading = false;
          this.done = false;
      }, 4000);
    }, 3000);
  }
}
