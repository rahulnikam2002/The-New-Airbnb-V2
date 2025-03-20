
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { SingleProperty } from './pages/singleProperty/singleProperty';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<SingleProperty />} />
    </Routes>
  );
}

export default App;
