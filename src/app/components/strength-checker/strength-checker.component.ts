import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-strength-checker',
  styleUrls: ['./strength-checker.component.scss'],
  templateUrl: './strength-checker.component.html',
})
export class StrengthCheckerComponent implements OnChanges {
  @Input() password:string;
  @Input() minLength: number = 8;
  @Output() strengthChange = new EventEmitter<boolean>();
  strengthText: string = '';
  score: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    changes?.['password']&& this.checkStrength();
  }

  checkStrength() {
    const total = 4;
    this.score = 0;
    this.score = this.isLength() ? this.score + 100 / total : this.score;
    this.score =  this.isSymbol() ? this.score + 100 / total : this.score;
    this.score = this.isNumber() ? this.score + 100 / total : this.score;
    this.score =  this.isChar() ? this.score + 100 / total : this.score;
    if(this.password.length<8)this.score = 1
    if(!this.password)this.score = 0;
    this.getStrengthText();
  }

  isLength() {
    return this.password.length >= this.minLength;
  }

  isSymbol() {
    return (/[!@#$%*:"'?/{(^<>}]/).test(this.password);
  }

  isNumber() {
    return (/[0-9]/).test(this.password);
  }

  isChar() {
    return (/[a-zA-Zа-яА-ЯєЄіІїЇюЮьЬйЙёЁэЭъЪ]/).test(this.password);
  }

  getStrengthText() {
    this.strengthText = ''
    switch (this.score) {
      case 1:
      case 25:
        this.strengthText = 'Too short';
        break;
      case 2:
      case 50:
        this.strengthText = 'Easy';
        break;
      case 3:
      case 75:
        this.strengthText = 'Medium';
        break;
      case 4:
      case 100:
        this.strengthText = 'Strong';
        break;
    }
  }

}
