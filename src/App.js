import logo from './logo.svg';
import './App.css';
import Countries from './Components/Countries';
import { Route, Routes } from 'react-router-dom';
import CountryById from './Components/CountryById';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path=':name' element={<CountryById />} />
      </Routes>
    </>
  );
}

export default App;
