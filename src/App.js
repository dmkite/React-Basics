import React, {useState} from 'react'
import ImageSelector from './components/ImageSelector'
import Title from './components/Title'
import Input from './components/Input'
import Instructions from './components/Instructions'

function App() {
  const [title, changeTitle] = useState('')
  return <main>
    <header>
      <ImageSelector/>
      <Title title={title}/>
    </header>
    <section>
      <Input handleChange={changeTitle} value={title}/>
      <hr/>
      <Instructions/>
    </section>
  </main>
}

export default App;
