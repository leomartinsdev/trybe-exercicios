import { useState } from 'react'
import './App.css'
import List from './components/List';
import messagesList from './data/messagesList';

function App() {
  const [messages, setMessages] = useState(messagesList);

  return (
    <>
      <header>
        <h1>
        TrybeMail
        </h1>
      </header>
      <List messages={ messages } />
    </>
  )
}

export default App
