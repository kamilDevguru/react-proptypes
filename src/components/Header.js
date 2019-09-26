import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{`Hello ${this.props.name}`}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
}

Header.defaultProps = {
  name: 'Jack',
}

export default Header;