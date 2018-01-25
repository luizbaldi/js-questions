import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

/* UI Components */
import Editor from '../components/Editor.jsx'
import ResultBox from '../components/ResultBox.jsx'

@inject('questionsStore')
@observer
class Questions extends Component {
  constructor(props) {
    super(props)

    /* Binds code submition listener */
    document.addEventListener('keydown', this.handleCodeSubmit.bind(this))

    this.onCodeChange = this.onCodeChange.bind(this)
    this.runTests = this.runTests.bind(this)
    this.setResult = this.setResult.bind(this)
    this.finish = this.finish.bind(this)
  }
  componentDidMount() {
    this.props.questionsStore.startTimer()
  }
  onCodeChange(newValue) {
    this.props.questionsStore.updateCurrentQuestionCode(newValue)
  }
  setResult(result) {
    this.props.questionsStore.setResult(result)
  }
  handleCodeSubmit(e) {
    if (e.keyCode === 13 && e.altKey) {
      let { code } = this.props.questionsStore.currentQuestion
      code = code
        .trim()
        .split('\n')
        .filter(line => {
          line = line.trim()
          return !(line.startsWith('//') || line.startsWith('/*'))
        })
        .join('')

      let currentFunc = null
      code = `currentFunc = ${code}`
      try {
        eval(code)
        let isValid = this.runTests(currentFunc)
        if (isValid) {
          this.props.questionsStore.nextLevel(currentFunc)
        } else {
          this.setResult('Tests are not passing. Check your code.')
        }
      } catch (err) {
        this.setResult(`Ops, something went wrong. Error: ${err.message}`)
      }
    }
  }
  runTests(currentFunc) {
    return this.props.questionsStore.currentQuestion.tests.every(test => currentFunc(test.param) === test.result)
  }
  finish() {
    this.props.history.push('finish');
  }
  render() {
    const { currentQuestion, result } = this.props.questionsStore
    return (
      <div>
        { result !== 'finished' ?
          <div>
            <Editor 
              code={currentQuestion.code}
              onChange={this.onCodeChange}
            />
            <ResultBox 
              value={result}
            />
          </div>
          : this.finish()
        }
      </div>
    )
  }
}

export default Questions