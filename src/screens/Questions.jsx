import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

/* UI Components */
import Editor from '../components/Editor.jsx';
import ResultBox from '../components/ResultBox.jsx';

@inject('questionsStore')
@observer
class Questions extends Component {
  render() {
    const { currentQuestion } = this.props.questionsStore;
    return (
      <div>
        <Editor code={currentQuestion.code} />
        <ResultBox value={currentQuestion.intro} />
      </div>
    );
  }
}

export default Questions;