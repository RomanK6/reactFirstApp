import HeaderLogo from '../../icons/logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
            <header className={classes.header}>
                <div className={classes.header__content}>
                    <img className={classes.header__logo} src={HeaderLogo} alt="logo" />
                </div>
                <div className={classes.LoginBlock}>
                    { props.isAuth 
                    ? 
                    <div>
                        {props.login}
                        <button onClick={props.logout}>log out</button>
                    </div>
                    : 
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                    }
                </div>
            </header>
    )
}

export default Header;