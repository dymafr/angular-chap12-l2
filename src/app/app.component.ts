import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  submit() {
    console.log(this.form);
  }
}
