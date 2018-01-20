import React, { PureComponent } from 'react'

/* Libs */
import styled from 'styled-components'

/* UI Components */
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'

class Initial extends PureComponent {
  changePage(page) {
    this.props.history.push(`/${page}`)
  }
  renderTips() {
    const items = [
      {
        primaryText: 'You can check internet for syntax doubts',
        secondaryText: 'It\'s normal to check JavaScript documentation'
      },
      {
        primaryText: 'You can console.log for testing',
        secondaryText: 'console.log can be your friend to print some values'
      },
      {
        primaryText: 'The timer is ticking',
        secondaryText: 'Don\'t worry about it, just saying to remember'
      },
      {
        primaryText: 'Hit Ctrl+Enter to proceed a level or submit',
        secondaryText: 'This is very important tho'
      }
    ]
    return items.map((item, idx) => (
      <StyledListItem
        key={`tipItem_${idx}`}
        primaryText={item.primaryText}
        secondaryText={item.secondaryText}
      />
    ))
  }
  render() {
    return (
      <VerticalContainer>
        <VerticalContent>
          <Container>
            <Card>
              <CardTitle
                title='JS Questions'
                subtitle={`Welcome to an adapted version of "You Can' t Javascript Under Pressure" :)`}
              />
              <CardText>
                <List>
                  <Subheader>Here are some tips</Subheader>
                  {this.renderTips()}
                </List>
                <FooterMessage>May the code be with you</FooterMessage>
              </CardText>
              <Divider />
              <CardActions>
                <FlatButton
                  label="Start coding!"
                  onClick={() => this.changePage('questions')}
                  fullWidth
                />
              </CardActions>
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

const FooterMessage = styled.i`
  margin: 10px 0;
  display: block;
`

const StyledListItem = styled(ListItem)`
  cursor: initial !important;
`

export default Initial