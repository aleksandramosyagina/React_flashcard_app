import Header from './../Header/Header.jsx';
// import Wordlist from './../Wordlist/Wordlist.jsx';
import words from './../../data/data.json';
import Table from '../Table/Table.jsx';
import CardSlider from '../CardSlider/CardSlider.jsx';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>


      <Header />
      <Routes>
        <Route path="/" element={<Table
          rows={words} />} />
        <Route path="/WordList" element={<Table
          rows={words} />} />
        <Route path="/CardSlider" element={<CardSlider />} />

      </Routes >
    </BrowserRouter >
  )
}

export default App;
