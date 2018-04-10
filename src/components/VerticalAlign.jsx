import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const VerticalAlign = ({ children }) => (
  <VerticalContainer>
    <VerticalContent>
      <Container>
        { children }
      </Container>
    </VerticalContent>
  </VerticalContainer>
)

VerticalAlign.propTypes = {
  children: propTypes.element.isRequired
}

const VerticalContainer = styled.div`
  top: 0;
  left: 0;
  text-align: center;
  height: 100vh;
  width: 100%;
  display: table;
  position: absolute;
`

const VerticalContent = styled.div`
  min-width: 350px;
  padding: 12px;
  vertical-align: middle;
  display: table-cell;
`

const Container = styled.div`
  margin: auto;
  max-width: 80%;
  text-align: center;
`

export default VerticalAlign
