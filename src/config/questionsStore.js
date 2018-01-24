import { observable, action } from 'mobx'
import questions from '../util/questions'

class QuestionsStore {
  questions = questions
  @observable currentQuestion = {}
  @observable result
  
  constructor() {
    this.loadInitialQuestion()
  }

  loadInitialQuestion() {
    const initialQuestion = this.questions[0]
    this.currentQuestion = initialQuestion
    this.result = this.currentQuestion.intro
  }

  @action setResult(result) {
    this.result = result
  }
  
  @action updateCurrentQuestionCode(code) {
    this.currentQuestion.code = code
  }

  @action nextLevel() {
    const nextQuestionIdx = this.questions.findIndex(question => question.name === this.currentQuestion.name) + 1

    if (nextQuestionIdx < this.questions.length) {
      this.currentQuestion = this.questions[nextQuestionIdx]
      this.result = this.currentQuestion.intro
    } else {
      this.result = 'finished';
    }
  }

}

export default new QuestionsStore()