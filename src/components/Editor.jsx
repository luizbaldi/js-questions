import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* Ace Dependencies */
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/twilight'

/* UI Components */
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MoveVertIcon from 'material-ui/svg-icons/device/brightness-low'
import Drawer from 'material-ui/Drawer'
import Subheader from 'material-ui/Subheader'
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

class Editor extends PureComponent {
  static propTypes = {
    code: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      config: {
        fontSize: 16,
        showLineNumbers: true,
        tabSize: 2,
        showPrintMargin: true,
        showGutter: true,
        highlightActiveLine: true
      },
      isMenuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    const isMenuOpen = !this.state.isMenuOpen
    this.setState({ isMenuOpen })
  }

  onCheckboxClick(name, checked) {
    const config = Object.assign({}, this.state.config)
    config[name] = checked
    this.setState({ config })
  }

  renderCheckboxItems() {
    const options = [
      {
        label: "Show line numbers",
        name: "showLineNumbers"
      },
      {
        label: "Show print margin",
        name: "showPrintMargin"
      },
      {
        label: "Show gutter",
        name: "showGutter"
      },
      {
        label: "Highlight active line",
        name: "highlightActiveLine"
      }
    ];
    
    return (
      <OptionsContainer>
        {options.map(option => (
          <StyledCheckbox
            key={`opt_${option.name}`}
            label={option.label}
            name={option.name}
            checked={this.state.config[option.name]}
            onCheck={e => this.onCheckboxClick(e.target.name, e.target.checked)}
          />  
        ))}
      </OptionsContainer>
    )
  }

  render() {
    const { fontSize, showLineNumbers, tabSize, showPrintMargin, showGutter, highlightActiveLine } = this.state.config;
    return (
      <div>
        <ActionButton backgroundColor="#676767" onClick={this.toggleMenu}>
          <MoveVertIcon />
        </ActionButton>
        <StyledEditor
          mode="javascript"
          theme="twilight"
          name="editor"
          fontSize={fontSize}
          value={this.props.code}
          onChange={this.props.onChange}
          setOptions={{ showLineNumbers, tabSize }}
          showPrintMargin={showPrintMargin}
          showGutter={showGutter}
          highlightActiveLine={highlightActiveLine}
        />
        <Drawer 
          open={this.state.isMenuOpen}
          onRequestChange={this.toggleMenu}
          docked={false}
          openSecondary
        >
          <Subheader>Editor configuration</Subheader>
          <Divider />
          {this.renderCheckboxItems()}
        </Drawer>
      </div>
    )
  }
} 

const StyledEditor = styled(AceEditor)`
  /* Had to set this !important because AceEditor has an default style */
  width: 100% !important;
  height: 70vh !important;
`

const ActionButton = styled(FloatingActionButton)`
  z-index: 1;
  position: absolute;
  right: 10px;
  top: 10px;
`

const OptionsContainer = styled.div`
  text-align: center;
  padding: 0 14px;
  margin-top: 12px;
`

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 10px;
`

export default Editor