import React, { Fragment } from 'react'

export const App = () => {
  console.log('Hola mundo ')
  return (
     
    <Fragment>
      <h1>Hola mundo </h1>
      <h2> fecha  { new Date().toLocaleDateString()}</h2>
      <p>Escribimos algo facil </p>
      <p>Actualizamos la web</p> 


    </Fragment>
      
  )
}

export default App


