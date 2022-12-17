import style from './header.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../img/eng.png';

export default function Header() {
    return (

        <header className={style.header}>
            <div className={style.appname}>
                <Link to='/'>
                    <img className={style.logo} src={Logo} alt="logo" />
                </Link>
                <div className={style.text}>
                    <p>Learn English Through Flashcards</p>
                </div>
            </div>
            <nav className={style.nav}>
                <Link to='/WordList'><p>Wordlist</p></Link>
                <Link to='/CardSlider'><p>Let's train!</p></Link>
            </nav>
        </header>

    )
}