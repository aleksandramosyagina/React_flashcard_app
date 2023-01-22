import React, { useState } from 'react';
import Wordcard from '../WordCard/WordCard.jsx';
import words from './../../data/data.json';
import style from './cardslider.module.scss';

function CardSlider() {
    const [count, setCount] = useState(1);
    const [word, setWord] = useState(words[count]);
    const [pressed, setPressed] = useState(false);
    const [learntWordsIds, setLearntWordsIds] = useState([]);
    const [wordsNumber, setWordsNumber] = useState(0);
    const [learntAll, setLearntAll] = useState(false);


    const handleCount = (id) => {
        const idsArr = [...learntWordsIds];
        idsArr.push(id);
        let result = [];


        idsArr.forEach((el) => {
            if (!result.includes(el)) {
                result.push(el);
            }
        })

        setLearntWordsIds(result);
        setWordsNumber(result.length)

        if (result.length === words.length) {
            setLearntAll(true)
        }
    }



    const handleChange = () => {
        setPressed(!pressed);
    }


    console.log();
    function handleClickPrev() {
        let val = count;
        val--;
        setCount(val);
        const arr = words[count];
        setWord(arr);
        setCount(count >= words.length - 1 ? 0 : count + 1);

        handleCount(words[count].id);
        setPressed(false);



    }
    function handleClickNext() {
        let val = count;
        val++;
        setCount(val);
        const arr = words[count];
        setWord(arr);
        console.log(`count ${count}`);

        setCount(count <= 0 ? words.length - 1 : count - 1);
        handleCount(words[count].id);
        setPressed(false);

    }



    return (
        <div className={style.cardslider}>
            <button className={style.button_prev} onClick={handleClickPrev}>prev</button>
            <Wordcard className={style.card}
                word={word}
                handleChange={handleChange}
                pressed={pressed}
            />
            <button className={style.button_next} onClick={handleClickNext}>next</button>

            {learntAll
                ? <div className={style.counter}>Keep it up! You've learnt all the words!</div>
                : <div className={style.counter}>Words learnt: {wordsNumber} out of {words.length} today! </div>
            }
        </div>
    )

}

export default CardSlider;
