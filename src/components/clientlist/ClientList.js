import React, {Component } from "react";
import PropTypes from 'prop-types';

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
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