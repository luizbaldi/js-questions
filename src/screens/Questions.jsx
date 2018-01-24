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
    document.addEventListener('keydown', this.handleCodeSubmit.bind(this));

    this.onCodeChange = this.onCodeChange.bind(this);
    this.runTests = this.runTests.bind(this);
  }
  onCodeChange(newValue) {
    this.props.questionsStore.updateCurrentQuestionCode(newValue);
  }
  handleCodeSubmit(e) {
    if (e.keyCode === 13 && e.altKey) {
      const { setResult, currentQuestion } = this.props.questionsStore;
      let { code } = currentQuestion;
      code = code
        .trim()
        .split('\n')
        .filter(line => {
          line = line.trim();
          return !(line.startsWith('//') || line.startsWith('/*'));
        })
        .join('');

      let currentFunc = null;
      code = `currentFunc = ${code}`;
      try {
        eval(code);
        let isValid = this.runTests(currentFunc);
        if (isValid) {
          setResult('Pass to the next level');
        } else {
          setResult('Tests are not passing');
        }
      } catch (err) {
        setResult('Check your code.', err.message);
      }
      
    }
  }
  runTests(currentFunc) {
    return this.props.questionsStore.currentQuestion.tests.every(test => currentFunc(test.param) === test.result);
  }
  render() {
    const { currentQuestion, result } = this.props.questionsStore
    return (
      <div>
        <Editor 
          code={currentQuestion.code}
          onChange={this.onCodeChange}
        />
        <ResultBox 
          value={result}
        />
      </div>
    )
  }
}

export default Questions