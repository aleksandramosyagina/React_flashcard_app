import React, { useState } from 'react';
import Wordcard from '../WordCard/WordCard.jsx';
import words from './../../data/data.json';
import style from './cardslider.module.scss';

function CardSlider() {
    const [count, setCount] = useState(1);
    const [word, setWord] = useState(words[count]);

    console.log(words);
    console.log(words[count]);

    function handleClickPrev() {
        let val = count;
        val--;
        setCount(val);
        const arr = words[count];
        setWord(arr);
    }
    function handleClickNext() {
        let val = count;
        val++;
        setCount(val);
        const arr = words[count];
        setWord(arr);
    }
    return (
        <div className={style.cardslider}>
            <button className={style.button_prev} onClick={handleClickPrev}>prev</button>
            <Wordcard className={style.card} word={word}
            />
            <button className={style.button_next} onClick={handleClickNext}>next</button>
        </div>
    );
}

export default CardSlider;
