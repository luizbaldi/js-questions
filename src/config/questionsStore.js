import { observable, action } from 'mobx'
import questions from '../util/questions'

class QuestionsStore {
  questions = questions
  finalQuestions

  @observable currentQuestion = {}
  @observable result
  @observable timerData
  
  constructor() {
    this.questions = questions
    this.finalQuestions = ''
    this.currentQuestion = this.questions[0]
    this.result = this.currentQuestion.intro
    this.timerData = {
      start: {},
      end: {}
    }
  }

  @action setResult(result) {
    this.result = result
  }
  
  @action updateCurrentQuestionCode(code) {
    this.currentQuestion.code = code
  }

  @action startTimer() {
    this.timerData.start = new Date()
  }

  @action nextLevel(question) {
    const nextQuestionIdx = this.questions.findIndex(question => question.name === this.currentQuestion.name) + 1
    
    /* Saves current subition with an separator */
    this.finalQuestions += `${question.toString()}//`

    if (nextQuestionIdx < this.questions.length) {
      this.currentQuestion = this.questions[nextQuestionIdx]
      this.result = this.currentQuestion.intro
    } else {
      this.result = 'finished'
      this.timerData.end = new Date();
    }
  }

}

export default new QuestionsStore()