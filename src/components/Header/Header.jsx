import style from './header.module.scss'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.appname}>
                <img className={style.logo} src="images/logo.png" alt="logo" />
                <div className={style.text}>
                    <p>Learn English Through Flashcards</p>
                </div>
            </div>
            <nav className={style.nav}>
                <p>Home</p>
                <p>Wordlist</p>
                <p>Flashcards</p>
            </nav>
        </header>
    )
}