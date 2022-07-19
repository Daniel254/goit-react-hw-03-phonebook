import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Input } from './SearchContact.styled';

export default class SearchContact extends Component {
  static propTypes = { filterHandler: PropTypes.func.isRequired };

  render() {
    const { filterHandler, filterString } = this.props;
    return (
      <div>
        Find contact by name
        <Input
          name="filter"
          type="text"
          autoComplete="off"
          onChange={filterHandler}
          value={filterString}
        />
      </div>
    );
  }
}
