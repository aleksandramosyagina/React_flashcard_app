import style from './App.scss';
import Header from './../Header/Header.jsx';
import Wordlist from './../Wordlist/Wordlist.jsx';
import words from './../../data/data.json';



function App() {
  return (
    <div className={style.App}>
      <Header />
      {/* <Wordlist /> */}

      {
        words.map((word) => {
          return <Wordlist key={word.id} word={word.english} translate={word.russian} transcription={word.transcription} tag={word.tags} />
        }

        )
      }

    </div>
  );
}

export default App;
