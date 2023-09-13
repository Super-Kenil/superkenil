import { Route, Routes } from 'react-router-dom';
import './global.css'

import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
