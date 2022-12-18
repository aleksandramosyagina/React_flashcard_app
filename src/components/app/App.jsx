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
import Error from '../404/404.jsx';

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
        <Route path="*" element={< Error />} />
      </Routes >
    </BrowserRouter >
  )
}

export default App;
