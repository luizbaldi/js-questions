import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* Ace Dependencies */
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';

const Questions = () => (
  <div>
    <Link to='/'>Back</Link>
    <h2>Questions here :)</h2>
    <Editor
      mode="javascript"
      theme="twilight"
      name="editor"
      onLoad={this.onLoad}
      onChange={this.onChange}
      fontSize={16}
      value={`console.log('Simple ace editor :)'`}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      showPrintMargin
      showGutter
      highlightActiveLine
    />
  </div>
);

const Editor = styled(AceEditor)`
  /* Yes, had to set this !important because AceEditor has an default style */
  width: 100% !important;
`;

export default Questions;