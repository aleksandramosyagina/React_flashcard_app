import { useState } from 'react';
import style from './wordcard.module.scss'

export default function Wordcard(props) {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className={style.wordcard}>
            <div className={style.card}>
                <div className={style.word}>{props.word}</div>
                <div className={style.transcription}>{props.transcription}</div>
                <div {...props} onClick={handleChange} className={style.translate}>
                    {pressed ? <div className={style.translation}>{props.translation}</div> : <button className={style.button_translate}>Проверить</button>
                    }
                </div>



            </div>
        </div>
    )


}

