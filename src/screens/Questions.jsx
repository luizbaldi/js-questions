import React, { PureComponent } from 'react';
import styled from 'styled-components';

/* UI Components */
import Editor from '../components/Editor.jsx';
import ResultBox from '../components/ResultBox.jsx';

class Questions extends PureComponent {
  render() {
    return (
      <div>
        <Editor code={`console.log('Simple ace editor :)')`} />
        <ResultBox value='Result goes here :)' />
      </div>
    );
  }
}

export default Questions;