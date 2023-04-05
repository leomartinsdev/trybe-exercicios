import React, { Component } from 'react'
import NameInput from './NameInput';
import TxtArea from './TxtArea';

export default class Form extends Component {
  
  state = {
    email: '',
    name: '',
    idade: '',
    txtarea: '',
    agree: false,
    formularioComErros: true,
  }

  handleError = () => {
    const { name, email, idade, txtarea, agree } = this.state;
    // Criamos um array com os dados obrigatórios.
    // Caso o length seja 0, então !campo.length será true (pqe o campo.length seria false)
    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !idade.length,
      !txtarea.length,
      !agree,
    ]

    // Caso haja algum campo que não seja true, formularioPreenchido estará como false
    // Ou seja, no array, todos tem que ser TRUE para que o formularioPreenchido retorne como true. Ou seja, tudo deve estar preenchido
    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      // Armazenamos o valor inverso no nosso estado para sabermos se o formulário possui erros
      formularioComErros: !formularioPreenchido,
    });
  }
  
  

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    },
    this.handleError);
  }

  render() {
    const { email, name, idade, txtarea, agree} = this.state
    return (
        <div>
        <h1>Exercício de fixação de Forms</h1>
        <form className='form'>
        <fieldset>
            <legend>Informações Pessoais</legend>
            <NameInput name={ name } handleChange={this.handleChange}/>

            <label htmlFor='email'>
              E-mail:
              <input id='email' name='email' type='email' onChange={ this.handleChange } value={ email }></input>
            </label>

            <label htmlFor='idade'>
              Idade:
              <select id='idade' name='idade' onChange={ this.handleChange } value={ idade }>
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Texto e Arquivos</legend>
            <TxtArea txtarea={ txtarea } handleChange={ this.handleChange }/>

            <input type='file' />
          </fieldset>

          <label htmlFor='agree'>
            Você concorda com o uso das informações?
            <input type='checkbox' id='agree' name='agree' onChange={ this.handleChange } value={ agree }></input>
          </label>
        </form>
      </div>
    )
  }
}


