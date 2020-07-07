import React, {Component } from "react";
import PropTypes from 'prop-types';

class Numbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { number } = steps;

    console.log(steps, 'are steps here?');
    this.setState({ number });
  }

  render() {
    const { number } = this.state;
    console.log(number, 'what is number here?');
    return (
      <div style={{ width: '100%' }}>

              <td> {number.value} </td>
      </div>
    );
  }
}

Numbers.propTypes = {
  steps: PropTypes.object,
};

Numbers.defaultProps = {
  steps: undefined,
};


export default Numbers;