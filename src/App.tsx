import React from 'react'

interface Iprpos {
  name: string
  age: number
}
function App(props: Iprpos) {
  const { name, age } = props
  return <div className="App">Hello webpacks{`${name}----${age}`}</div>
}
export default App
