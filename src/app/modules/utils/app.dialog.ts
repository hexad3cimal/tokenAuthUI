/**
 * Created by hexad3cimal on 15/3/17.
 */

import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app.dialog',
  templateUrl: '../../ui/app.dialog.html',
})

export class ModalDialog {
  constructor(public dialogRef: MdDialogRef<ModalDialog>) {}
}
