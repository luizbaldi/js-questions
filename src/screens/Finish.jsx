import React, { PureComponent } from 'react';

/* Libs */
import styled from 'styled-components'
import { inject } from 'mobx-react'

/* UI Components */
import { Card, CardTitle, CardText } from 'material-ui/Card'

@inject('questionsStore')
class Finish extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      finalTime: ''
    }
  }
  componentWillMount() {
    const { timerData } = this.props.questionsStore
    const finalTime = timerData.end - timerData.start
    const seconds = Math.floor(finalTime / 1000)
    const minutes = Math.floor(seconds / 60)
    this.setState({ finalTime: `${minutes}: ${seconds}` })
  }
  render() {
    return (
      <VerticalContainer>
        <VerticalContent>
          <Container>
            <Card>
              <CardTitle
                title='Congratulations'
                subtitle='You finished the test!'
              />
              <CardText>
                Time elapsed: {this.state.finalTime} 
              </CardText>
            </Card>
          </Container>
        </VerticalContent>
      </VerticalContainer>
    )
  } 
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

export default Finish