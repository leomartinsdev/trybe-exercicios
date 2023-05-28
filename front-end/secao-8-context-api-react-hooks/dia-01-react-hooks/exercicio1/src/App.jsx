import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <>
      <span>Exercício 1</span>
      <div>
        <input
          type="text"
          placeholder='Nome Completo'
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="number"
          name="idade"
          placeholder='Idade'
          value={age}
          onChange={({ target }) => setAge(target.value)}
        />
        <input
          type="text"
          name="cidade"
          placeholder='cidade'
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
        <fieldset>
          <label htmlFor="Fundamentos">
            Fundamentos
            <input
              type="radio"
              name="fav_language"
              id="Fundamentos"
              value='Fundamentos'
              checked={module === 'Fundamentos'}
              onChange={({ target }) => setModule(target.value)}  
            />
          </label>
          <label htmlFor="Front-end">
            Front-end
            <input
              type="radio"
              name="fav_language"
              id="Front-end"
              value='Front-end'
              checked={module === 'Front-end'}
              onChange={({ target }) => setModule(target.value)}  
            />
          </label>
          <label htmlFor="Back-end">
            Back-end
            <input
              type="radio"
              name="fav_language"
              id="Back-end" 
              value='Back-end'
              checked={module === 'Back-end'}
              onChange={({ target }) => setModule(target.value)}  
            />
          </label>
          <label htmlFor="Ciência-da-Computação">
            Ciência da Computação
            <input
              type="radio"
              name="fav_language"
              id="Ciência-da-Computação"
              value='Ciência da Computação'
              checked={module === 'Ciência da computação'}
              onChange={({ target }) => setModule(target.value)}   
            />
          </label>
        </fieldset>
        <button type="submit">Submeter Info</button>
      </div>

    </>
  )
}

export default App
