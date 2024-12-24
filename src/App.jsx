import { Landing } from './Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemons } from './Pokemons';
import { Test } from './Test';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { PokemonDetails } from './PokemonDetails';
function App() {

  return (
    
      <RecoilRoot>
        <React.Suspense fallback={<div className='w-full h-screen grid place-items-center text-white bg-black'>Loading...</div>}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/pokemons' element={<Pokemons />} />
                <Route path='/test' element={<Test />}></Route>
                <Route path='/pokemon/details/:id' element={<PokemonDetails />}></Route>

            </Routes>
          </BrowserRouter>
          </React.Suspense>
      </RecoilRoot>
  )
}

export default App
