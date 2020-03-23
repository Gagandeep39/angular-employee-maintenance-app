import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  // Message to be displayed is passed as a property
  @Input() message: string;
  // To close the alertbox in clicking close
  @Output() alertActionEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  closeAlert() {
    this.alertActionEvent.emit('close');
  }

}
