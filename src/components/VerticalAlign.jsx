import React from 'react'
import styled from 'styled-components'

const VerticalAlign = (props) => (
  <VerticalContainer>
    <VerticalContent>
      <Container>
        { props.children }
      </Container>
    </VerticalContent>
  </VerticalContainer>
)

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