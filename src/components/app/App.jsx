import style from './App.scss';
import Header from './../Header/Header.jsx';
// import Wordlist from './../Wordlist/Wordlist.jsx';
import words from './../../data/data.json';
import Wordcard from '../WordCard/WordCard.jsx';
import Table from '../Table/Table.jsx';

const rows = [
  { "id": "11346", "english": "street", "transcription": "[ stri:t ]", "russian": "улица", "tags": "в городе", "tags_json": "[\"u043eu0432u043eu0449u0438\"]" },

  { "id": "11347", "english": "car", "transcription": "[ kɑ: ]", "russian": "автомобиль", "tags": "", "tags_json": "[\"\"]" },

  { "id": "11350", "english": "arm", "transcription": "[ ɑ:m ]", "russian": "рука", "tags": "", "tags_json": "[\"\"]" },

  { "id": "11354", "english": "air", "transcription": "[  eər ]", "russian": "воздух", "tags": "", "tags_json": "[\"\"]" },

  { "id": "11355", "english": "fox", "transcription": "[ fɒks ]", "russian": "лиса", "tags": "", "tags_json": "[\"\"]" },
];


function App() {
  return (
    <div className={style.App}>
      <Header />
      {/* <Wordlist /> */}

      {/* {
        words.map((word) => {
          return <Wordlist key={word.id} word={word.english} translate={word.russian} transcription={word.transcription} tag={word.tags} />
        }

        )
      } */}

      <Table
        rows={words}
      />

      <Wordcard
        word={'hedgehog'}
        transcription={'[ˈhedʒ.hɒɡ]'}
        translation={'ежик'}
      />
    </div>
  );
}

export default App;
