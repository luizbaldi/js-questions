import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResultBox = ({ value }) => (
  <Result>
    <span>{value}</span>
  </Result>
)

ResultBox.propTypes = {
  value: PropTypes.string.isRequired
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