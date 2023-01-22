import style from './wordcard.module.scss';
import { useEffect, useRef } from 'react';

export default function Wordcard({ word, handleChange, pressed }) {
    const focusBtn = useRef(null);
    useEffect(() => {
        focusBtn.current.focus();
    }, [word.english])

    return (
        <div className={style.wordcard}>
            <div className={style.card}>
                <div className={style.word}>{word.english}</div>
                <div className={style.transcription}>{word.transcription}</div>
                <div onClick={handleChange} className={style.translate}>
                    {pressed ? <div className={style.translation}>{word.russian}</div> : <button ref={focusBtn} className={style.button_translate}>Проверить</button>
                    }

                </div>



            </div>
        </div>
    )


}

