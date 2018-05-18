import React, { PureComponent } from 'react';

/* Libs */
import { inject } from 'mobx-react'

/* UI Components */
import { Card, CardTitle, CardText } from 'material-ui/Card'
import VerticalAlign from '../components/VerticalAlign';

@inject('questionsStore')
class Finish extends PureComponent {

  constructor (props) {
    super(props);

    this.state = {
      finalTime: ''
    }
  }
  componentWillMount () {
    const { timerData } = this.props.questionsStore
    const finalTime = timerData.end - timerData.start
    const seconds = Math.floor(finalTime / 1000)
    const minutes = Math.floor(seconds / 60)
    this.setState({ finalTime: `${minutes}: ${seconds}` })
  }

  render () {
    return (
      <VerticalAlign>
        <Card>
          <CardTitle
            title='Congratulations'
            subtitle='You finished the test!'
          />
          <CardText>
            Time elapsed: {this.state.finalTime}
          </CardText>
        </Card>
      </VerticalAlign>
    )
  }

}

export default Finish
