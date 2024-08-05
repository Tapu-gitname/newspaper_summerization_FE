import { Component, Input } from '@angular/core';

interface Mcq {
  question: string;
  answer: string;
  options?: string[];
}

@Component({
  selector: 'app-mcq-card',
  templateUrl: './mcq-card.component.html',
  styleUrls: ['./mcq-card.component.css']
})
export class McqCardComponent {
  @Input() mcqs: Mcq[] = [];
  
  currentQuestionIndex: number = 0; // Track current question index
  userAnswer: string = '';
  selectedOption: string = '';
  feedback: string = '';
  showCorrectAnswer: boolean = false;

  get currentQuestion(): Mcq {
    return this.mcqs[this.currentQuestionIndex];
  }

  checkAnswer(): void {
    if (this.currentQuestion.options) {
      if (this.selectedOption === this.currentQuestion.answer) {
        this.feedback = 'Your answer is correct!';
      } else {
        this.feedback = `Your answer is wrong. Correct answer is: ${this.currentQuestion.answer}`;
      }
    } else {
      if (this.userAnswer.trim().toLowerCase() === this.currentQuestion.answer.toLowerCase()) {
        this.feedback = 'Your answer is correct!';
      } else {
        this.feedback = 'Please try again or show the answer.';
      }
    }
  }

  revealAnswer(): void {
    this.showCorrectAnswer = true;
  }

  nextQuestion(): void {
    this.resetFeedback();
    this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.mcqs.length;
  }

  previousQuestion(): void {
    this.resetFeedback();
    this.currentQuestionIndex = (this.currentQuestionIndex - 1 + this.mcqs.length) % this.mcqs.length;
  }

  private resetFeedback(): void {
    this.userAnswer = '';
    this.selectedOption = '';
    this.feedback = '';
    this.showCorrectAnswer = false;
  }
}
