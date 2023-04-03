import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div>
        <ArticlesContainer></ArticlesContainer>
      </div>
    </div>
  )
}

export default App
