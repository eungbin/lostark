import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <section className='bg-indigo-100 w-screen min-h-screen'>
      <Header />
      <Main />
    </section>
  )
}

export default App
