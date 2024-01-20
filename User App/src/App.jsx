import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Components/Create'
import Details from './Components/Details'
import Nav from './Components/Nav'
import Edit from './Components/Edit'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Create />} path="/" />
          <Route element={<Details />} path="/details" />
          <Route element={<Edit />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App