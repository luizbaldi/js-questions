// @flow

import { observable, action } from 'mobx'
import shortid from 'shortid'
import questions from '../util/questions/'

class QuestionsStore {

  questions: mixed[] = questions
  finalQuestions: string = ''

  @observable currentQuestion: { name: string, intro: string, code: string, tests: mixed[] } = {}
  @observable result: string
  @observable timerData: { start: any, end: any }

  constructor () {
    this.currentQuestion = this.questions[0]
    this.result = this.currentQuestion.intro
    this.timerData = {
      start: {},
      end: {}
    }
  }

  @action setResult (result) {
    this.result = result
  }

  @action updateCurrentQuestionCode (code) {
    this.currentQuestion.code = code
  }

  @action startTimer () {
    this.timerData.start = new Date()
  }

  @action nextLevel (question) {
    /* eslint max-len: 0 */
    const nextQuestionIdx = this.questions.findIndex((currQuestion) => currQuestion.name === this.currentQuestion.name) + 1

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

  runTests (currentFunc, submissions) {
    return this.currentQuestion.tests.every(test => {
      submissions.push({
        id: shortid.generate(),
        expected: test.result,
        result: currentFunc(test.param)
      })
      return currentFunc(test.param) === test.result
    })
  }

}

export default new QuestionsStore()
