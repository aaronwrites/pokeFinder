import {Landing} from './pages/Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemons } from './pages/Pokemons';
import { RecoilRoot } from 'recoil';
import React, { Suspense } from 'react';
import { PokemonDetails } from './pages/PokemonDetails';
import { Loader } from './components/Loader';
function App() {

  return (
    
      <RecoilRoot>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/pokemons' element={<Pokemons />} />
                <Route path='/pokemon/details/:id' element={<PokemonDetails />} />
              </Routes>
          </BrowserRouter>
      </RecoilRoot>
  )
}

export default App
