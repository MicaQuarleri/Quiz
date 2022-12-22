import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quizOpen = false
  showResults = false
  showCongrats = false
  correctAnswers = 0
  click = false
  step = 1
  quiz = {
    questions: [
      {
        question: 'What continent is Egypt on?',
        options: [
          {
            name: 'Africa',
            result: 'yes'
          },
          {
            name: 'Europe',
            result: 'no'
          },
          {
            name: 'Asia',
            result: 'no'
          },
          {
            name: 'America',
            result: 'no'
          }
        ]
      },
      {
        question: 'What is the capital of Argentina?',
        options: [
          {
            name: 'New York',
            result: 'no'
          },
          {
            name: 'Buenos Aires',
            result: 'yes'
          },
          {
            name: 'Madrid',
            result: 'no'
          }
        ]
      },
      {
        question: 'What country is bordering Canada?',
        options: [
          {
            name: 'United States',
            result: 'yes'
          },
          {
            name: 'Mexico',
            result: 'no'
          },
          {
            name: 'Costa Rica',
            result: 'no'
          }
        ]
      }
    ]
  }

  openQuiz (): void {
    this.step = 1
    this.correctAnswers = 0
    this.quizOpen = true
    this.showResults = false
  }

  closeQuiz (): void {
    this.quizOpen = false
    this.showResults = false
    this.showCongrats = false
  }

  answer (answer: string): void {
    this.click = true
    setTimeout(() => {
      if (answer === 'no') {
        this.showResults = true
        this.quizOpen = false
      } else {
        this.correctAnswers += 1
        if (this.correctAnswers === this.quiz.questions.length) {
          this.showCongrats = true
          this.quizOpen = false
        } else {
          this.step += 1
        }
      }
      this.click = false
    }, 1000)
  }
}
