import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NameInput extends Component {
  render() {
    const { name, handleChange} = this.props;
    const charLimit = 80;

    return (
      <label htmlFor='name'>
      Nome:
      <input id='name' name='name' type='text' onChange={ handleChange } value={ name }></input>
      { !name ? 'O nome precisa ser preenchido' : '' }
      { name.length > charLimit ? 'O nome não pode ter mais que 89 chars' : '' }
    </label>
    )
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
