import style from './wordcard.module.scss'

export default function Wordcard({ word, handleChange, pressed }) {

    return (
        <div className={style.wordcard}>
            <div className={style.card}>
                <div className={style.word}>{word.english}</div>
                <div className={style.transcription}>{word.transcription}</div>
                <div onClick={handleChange} className={style.translate}>
                    {pressed ? <div className={style.translation}>{word.russian}</div> : <button className={style.button_translate}>Проверить</button>
                    }
                </div>



            </div>
        </div>
    )


}

