import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import '../styles/AddJargonFormComponent.css'

class AddJargonFormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jargon: ' ',
      description: ' ',
      possibleMatches: [],
      titleError: true,
      descError: true
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  getTitleValidationState(jargon) {
    if (jargon === ' ' || jargon === '') {
      this.setState({ titleError: true })
      return ;
    }

    const possibleMatches = this.props.jargonList
                                      .filter(val => val.name.toUpperCase().indexOf(jargon) !== -1)
                                      .map(val => val.name.toUpperCase())
    this.setState({ possibleMatches: possibleMatches })

    if (possibleMatches.indexOf(jargon) !== -1) {
      this.setState({ titleError: true })
      return ;
    }
    this.setState({ titleError: false })
  }

  getDescriptionValidationState() {
    if (this.state.description === ' ' || this.state.description === '') {
      this.setState({ descError: true })
      return ;
    }
    this.setState({ descError: false })
  }

  handleTitleChange(e) {
    this.setState({ jargon: e.target.value })
    this.setState({ possibleMatches: [] })
    this.getTitleValidationState(e.target.value.toUpperCase())
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
    this.getDescriptionValidationState()
  }

  renderDescription() {
    return (
      <FormGroup controlId="formControlsTextarea"
                 validationState={this.state.descError ? 'error' : null}>
        <FormControl componentClass="textarea"
                     placeholder="Editing new description"
                     onChange={this.handleDescriptionChange} />
      </FormGroup>
    )
  }

  renderPossibleMatches() {
    if (this.state.possibleMatches.length === 0) return ' '
    return (
      <datalist id="title-suggestions">
        { this.state.possibleMatches
                    .map((val, idx) => <option key={idx} value={val}/>)
        }
      </datalist>
    )
  }

  renderSubmitButton() {
    const handleOnclick = () => this.props.handleJargonSubmittion(this.state.jargon, this.state.description)
    return (
      <Button className="add-jargon-button"
              type="submit"
              disabled={ this.state.titleError || this.state.descError }
              onClick={handleOnclick}>
                Submit
      </Button>
    )
  }

  renderWarning() {
    return (
      <Alert bsStyle="warning">
        You cannot add a term that already exists
      </Alert>
    )
  }

  render() {
    const descriptionComponent = !this.state.titleError ? this.renderDescription() : ' '
    const possibleMatches = this.renderPossibleMatches()
    const submitButton = !this.state.titleError ? this.renderSubmitButton() : ' '
    const warningMessage = this.state.titleError && this.state.possibleMatches.length !== 0 ? this.renderWarning() : ' '

    return (
      <div>
        <form>
          { warningMessage }
          <FormGroup
            controlId="formBasicText"
            validationState={this.state.titleError ? 'error' : null}
          >
            <FormControl
              type="text"
              value={this.state.value}
              list="title-suggestions"
              placeholder="Add new jargon item"
              onChange={this.handleTitleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          { possibleMatches }
          { descriptionComponent }
          { submitButton }
        </form>
      </div>
    )
  }
}

export default AddJargonFormComponent;
