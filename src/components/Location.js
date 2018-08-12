import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/weather";
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";

class Location extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <InputGroup>
          <Input
            type="input"
            name="q"
            placeholder="Type a city name"
            onChange={this.onInputChange}
          />
          <InputGroupAddon addonType="append">
            <Button>Submit</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Location);
