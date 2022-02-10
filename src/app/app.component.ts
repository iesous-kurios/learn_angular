import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';


  onButtonClick() {
    this.password = 'MY PASSWORD!!!';
    console.log("State of include letters" + " " + this.includeLetters);
    console.log("State of include numbers" + " " + this.includeNumbers);
    console.log("State of include symbols" + " " + this.includeSymbols);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

}
