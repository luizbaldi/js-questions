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
    this.currentQuestion = this.questions[Object.keys(this.questions)[0]]
    this.result = this.currentQuestion.intro
  }

  @action setResult(result) {
    this.result = result;
  }
  
  @action updateCurrentQuestionCode(code) {
    this.currentQuestion.code = code;
  }

}

export default new QuestionsStore()