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

    /* Binds code submission listener */
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
        const submissions = []
        eval(code)
        const isValid = this.runTests(currentFunc, submissions)
        if (isValid) {
          this.props.questionsStore.nextLevel(currentFunc)
        } else {
          const FailTests = this.renderFailTests(submissions);
          this.setResult(FailTests)
        }
      } catch (err) {
        this.setResult(`Ops, something went wrong. Error: ${err.message}`)
      }
    }
  }

  runTests(currentFunc, submissions) {
    return this.props.questionsStore.currentQuestion.tests.every(test => {
      submissions.push({
        expected: test.result,
        result: currentFunc(test.param)
      })
      return currentFunc(test.param) === test.result
    })
  }

  renderFailTests(submissions) {
    return (
      <div>
        <span>Tests are not passing. Check your code.</span>
        {submissions.map((submission, idx) => (
          <p key={`submission_${idx}`}>
            <span>Expected: {submission.expected.toString()}</span>
            <span> - </span>
            <span>Got: {submission.result.toString()}</span>
          </p>
        ))} 
      </div>
    )
  }

  finish() {
    this.props.history.push('finish');
  }

  render() {
    const { currentQuestion, result } = this.props.questionsStore
    const codeTest = currentQuestion.code.replace('\t','');
    return (
      <div>
        { result !== 'finished' ?
          <div>
            <Editor 
              code={codeTest}
              onChange={this.onCodeChange}
            />
            <ResultBox>{result}</ResultBox>
          </div>
          : this.finish()
        }
      </div>
    )
  }
}

export default Questions