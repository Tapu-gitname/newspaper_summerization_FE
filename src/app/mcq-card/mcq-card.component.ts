import { Component, Input } from '@angular/core';

interface Mcq {
  question: string;
  answer: string;
  options?: string[];
}

@Component({
  selector: 'app-mcq-card',
  templateUrl: './mcq-card.component.html',
  styleUrl: './mcq-card.component.css'
})
export class McqCardComponent {
  @Input() mcq: Mcq = { question: '', answer: '', options: [] };
  userAnswer: string = '';
  selectedOption: string = '';
  feedback: string = '';
  showCorrectAnswer: boolean = false;

  checkAnswer(): void {
    if (this.mcq.options) {
      if (this.selectedOption === this.mcq.answer) {
        this.feedback = 'Your answer is correct!';
      } else {
        this.feedback = 'Your answer is wrong. Correct answer is: ' + this.mcq.answer;
      }
    } else {
      if (this.userAnswer.trim().toLowerCase() === this.mcq.answer.toLowerCase()) {
        this.feedback = 'Your answer is correct!';
      } else {
        this.feedback = 'Please try again or show the answer.';
      }
    }
  }

  revealAnswer(): void {
    this.showCorrectAnswer = true;
  }
}
