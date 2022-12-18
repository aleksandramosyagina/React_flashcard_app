import React, { useState } from 'react';
import Wordcard from '../WordCard/WordCard.jsx';
import words from './../../data/data.json';
import style from './cardslider.module.scss';

function CardSlider() {
    const [count, setCount] = useState(1);
    const [word, setWord] = useState(words[count]);
    const [pressed, setPressed] = useState(false);
    const [index, setIndex] = useState(0);
    console.log(index);
    function handleClickPrev() {
        let val = count;
        val--;
        setCount(val);
        const arr = words[count];
        setWord(arr);
        setIndex(index >= words.length - 1 ? 0 : index + 1);

        setPressed(false);

    }
    function handleClickNext() {
        let val = count;
        val++;
        setCount(val);
        const arr = words[count];
        setWord(arr);
        console.log(`count ${count}`);

        setIndex(index <= 0 ? words.length - 1 : index - 1);
        setPressed(false);

    }



    return (
        <div className={style.cardslider}>
            <button className={style.button_prev} onClick={handleClickPrev}>prev</button>
            <Wordcard className={style.card}
                word={word}
                setPressed={setPressed}
                pressed={pressed}
            />
            <button className={style.button_next} onClick={handleClickNext}>next</button>


        </div>
    )

}

export default CardSlider;
