import { observable } from 'mobx'
import questions from '../util/questions'

class QuestionsStore {
  questions = questions
  @observable currentQuestion = {}
  
  constructor() {
    this.loadInitialQuestion()
  }

  loadInitialQuestion() {
    this.currentQuestion = this.questions[Object.keys(this.questions)[0]]
  }

}

export default new QuestionsStore()