import React, { useState } from 'react';
import Wordcard from '../WordCard/WordCard.jsx';
import words from './../../data/data.json';
import style from './cardslider.module.scss';

function CardSlider() {
    const [count, setCount] = useState(1);
    const [word, setWord] = useState(words[count]);
    // const [learntWordsIds, setlearntWordsIds] = useState([]);
    // const [wordsNumber, setWordsNumber] = useState(0);
    // const [pressed, setPressed] = useState(false);
    // const [wordStock, setWordStock] = useState(words);
    // const [learntAll, setLearntAll] = useState(false);
    // const [index, setIndex] = useState(0);

    // console.log(words.length);
    // console.log(words[count]);
    // const handleCount = (id) => {
    //     const idsArr = [...learntWordsIds];
    //     idsArr.push(id);
    //     let result = [];

    //     idsArr.forEach((el) => {
    //         if (!result.includes(el)) {
    //             result.push(el);
    //         }
    //     })

    //     setlearntWordsIds(result);
    //     setWordsNumber(result.length)

    //     if (result.length === wordStock.length) {
    //         setLearntAll(true)
    //     }
    // }

    function handleClickPrev() {
        let val = count;
        val--;
        setCount(val);
        const arr = words[count];
        setWord(arr);


        // if (arr >= words.length) {
        //     arr = 0;
        // }

        // if (arr < 0) {
        //     arr = words.length - 1;
        // }
        // setPressed(false);

    }
    function handleClickNext() {
        let val = count;
        val++;
        setCount(val);
        const arr = words[count];
        setWord(arr);
        console.log(`count ${count}`);



        // if (arr >= words.length) {
        //     arr = 0;
        // }

        // if (arr < 0) {
        //     arr = words.length - 1;
        // }
        // setPressed(false);

    }

    //считаем количество выученных слов



    return (
        <div className={style.cardslider}>
            <button className={style.button_prev} onClick={handleClickPrev}>prev</button>
            <Wordcard className={style.card} word={word}

            />
            <button className={style.button_next} onClick={handleClickNext}>next</button>


        </div>
    )

}

export default CardSlider;
