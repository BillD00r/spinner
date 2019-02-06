import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {

  @Input()
  public done: boolean;
  @Input()
  public success: boolean;


  constructor() {
    this.done = false;
    this.success = false;
  }
}
