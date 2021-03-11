import React, {useState} from 'react'
import {ImageSelector} from './components/ImageSelector'
import {Title} from './components/Title'
import {Instructions} from './components/Instructions'
import {Input} from './components/Input'
import {Disclaimer} from './components/Disclaimer'
import {Signup} from './components/Signup'

function App() {
  const [title, changeTitle] = useState('')

  return <main>
    <header>
      <ImageSelector/>
      <Title title={title}/>
    </header>
    <section>
      <Input handleChange={changeTitle} value={title} />
      <hr/>
      <Instructions/>
    </section>
    <Signup/>
    <Disclaimer name={title}/>
  </main>
}

export default App;
