import React, { PureComponent } from 'react'

/* Libs */
import styled from 'styled-components'
import shortid from 'shortid'

/* UI Components */
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import VerticalAlign from '../components/VerticalAlign'

class Initial extends PureComponent {

  changePage (page) {
    this.props.history.push(`/${page}`)
  }

  renderTips = () => {
    const items = [
      {
        id: shortid.generate(),
        primaryText: 'You can check internet for syntax doubts',
        secondaryText: 'It\'s normal to check JavaScript documentation'
      },
      {
        id: shortid.generate(),
        primaryText: 'You can console.log for testing',
        secondaryText: 'console.log can be your friend to print some values'
      },
      {
        id: shortid.generate(),
        primaryText: 'The timer is ticking',
        secondaryText: 'Don\'t worry about it, just saying to remember'
      },
      {
        id: shortid.generate(),
        primaryText: 'Hit Alt+Enter to proceed a level or submit',
        secondaryText: 'This is very important tho'
      }
    ]
    return items.map((item) => (
      <StyledListItem
        key={item.id}
        primaryText={item.primaryText}
        secondaryText={item.secondaryText}
      />
    ))
  }
  render () {
    return (
      <VerticalAlign>
        <Card>
          <CardTitle
            title='JS Questions'
            subtitle='Welcome to an adapted version of "You Cannot Javascript Under Pressure" :)'
          />
          <CardText>
            <List>
              <Subheader>Here arspoe some tips</Subheader>
              {this.renderTips()}
            </List>
            <FooterMessage>May the code be with you</FooterMessage>
          </CardText>
          <Divider />
          <CardActions>
            <FlatButton
              label='Start coding!'
              onClick={() => this.changePage('questions')}
              fullWidth
            />
          </CardActions>
        </Card>
      </VerticalAlign>
    )
  }

}

const FooterMessage = styled.i`
  margin: 10px 0;
  display: block;
`

const StyledListItem = styled(ListItem)`
  cursor: initial !important;
`

export default Initial
