import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResultBox = ({ children }) => (
  <Result>
    {children}
  </Result>
)

ResultBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

const Result = styled.div`
  height: 30vh;
  background-color: #fafafa;
  
  > span {
    display: block;
    padding: 8px;
  }
`

export default ResultBox
