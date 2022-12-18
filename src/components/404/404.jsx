import style from './404.module.scss';
import NoMatch from '../../img/404.png';
import { Link } from 'react-router-dom';

export default function Error() {


    return (
        <div className={style.error_container}>
            <Link to='*'>
                <img className={style.error} src={NoMatch} alt="error" />
            </Link>
        </div>
    )
}
