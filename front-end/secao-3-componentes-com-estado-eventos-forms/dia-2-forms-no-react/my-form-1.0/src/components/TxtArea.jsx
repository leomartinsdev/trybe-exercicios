import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TxtArea extends Component {
  render() {
    const { txtarea, handleChange } = this.props;
    return (
      <label htmlFor='txtarea'>
      Comentários:
      <textarea id='txtarea' name='txtarea' onChange={ handleChange } value={ txtarea }></textarea>
      { !txtarea ? 'É necessário preencher o texto' : '' }
    </label>
    )
  }
}

TxtArea.propTypes = {
  anecdote: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
