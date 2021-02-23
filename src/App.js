import React, {useState} from 'react'
import {ImageSelector} from './components/ImageSelector'
import {Title} from './components/Title'
import {Instructions} from './components/Instructions'

function App() {
  const [title, changeTitle] = useState('')
  // use changeTitle() for the onChange event in <Input/>
  // changeTitle(title: string) -> undefined
  // input tags have a synthetic event called onChange that takes an event obj
  // and supplies it to a callback. To get the content of the change event, e.g
  // the string value of the input, supply event.target.value to the callback.
  // onChange={e => cb(e.target.value)}
  return <main>
    <header>
      <ImageSelector/>
      <Title title={title}/>
    </header>
    <section>
      {/* Input component goes here */}
      <Input handleChange={changeTitle} value={title} />
      <hr/>
      <Instructions/>
    </section>
  </main>
}

export default App;
