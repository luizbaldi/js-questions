import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* Ace Dependencies */
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/twilight'

const Editor = ({ code }) => (
  <StyledEditor
    mode="javascript"
    theme="twilight"
    name="editor"
    fontSize={16}
    value={code}
    setOptions={{
      showLineNumbers: true,
      tabSize: 2,
    }}
    showPrintMargin
    showGutter
    highlightActiveLine
  />
)

Editor.propTypes = {
  code: PropTypes.string.isRequired
}

const StyledEditor = styled(AceEditor)`
  /* Had to set this !important because AceEditor has an default style */
  width: 100% !important;
  height: 70vh !important;
`

export default Editor