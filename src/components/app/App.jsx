import style from './App.scss';
import Header from './../Header/Header.jsx';
// import Wordlist from './../Wordlist/Wordlist.jsx';
import words from './../../data/data.json';
import Table from '../Table/Table.jsx';
import CardSlider from '../CardSlider/CardSlider.jsx';

function App() {
  return (
    <div className={style.App}>
      <Header />

      <Table
        rows={words}
      />

      <CardSlider
      />
    </div>
  );
}

export default App;
