import React, {Component } from "react";
import ChatBot from "react-simple-chatbot";
import PropTypes from 'prop-types';
import { ThemeProvider } from "styled-components";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      socialMedia: '',
      company: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    console.log(steps, 'what is in steps here at review');
    const { name, socialMedia, company } = steps;

    this.setState({ name, socialMedia, company });
  }

  render() {
    const { name, socialMedia, company } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary of your client</h3>
        <table>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Social Media Platform: </td>
              <td>{socialMedia.value}</td>
            </tr>
            <tr>
              <td>Company: </td>
              <td>{company.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};


export default Review;