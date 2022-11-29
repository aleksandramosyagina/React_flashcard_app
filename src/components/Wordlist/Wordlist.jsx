import style from './wordlist.module.scss';



export default function Wordlist(props) {
    return (
        <div className={style.container}>
            <div className={style.word_item}>{props.word}</div>
            <div className={style.transcription_item}>{props.transcription}</div>
            <div className={style.translate_item}>{props.translate}</div>
            <div className={style.tag_item}>{props.tag}</div>
            <div className={style.buttons}>
                {/* <Button text={'Edit'} />
                <Button text={'Delete'} /> */}
            </div>
        </div>




    )
}