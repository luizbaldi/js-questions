import { observable } from 'mobx'
import questions from '../util/questions'

class Store {
  @observable questions = questions
}

const storeInstance = new Store

export default storeInstance