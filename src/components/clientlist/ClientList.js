import React, {Component } from "react";
import ChatBot from "react-simple-chatbot";
import PropTypes from 'prop-types';
import { ThemeProvider } from "styled-components";

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    console.log(steps, 'what is in steps here at review');
    const { fullName } = steps;

    this.setState({ fullName });
  }

  render() {
    const { fullName} = this.state;
    return (
      <div style={{ width: '100%' }}>

              <td>{fullName.value}</td>
      </div>
    );
  }
}

ClientList.propTypes = {
  steps: PropTypes.object,
};

ClientList.defaultProps = {
  steps: undefined,
};


export default ClientList;