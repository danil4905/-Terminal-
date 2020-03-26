import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className={s.header} id='header'>
            <div className='container'>
                <div className={s.add}>нажмите на картинку чтобы начать </div>
                <div className={s.header__logo}>
                    <NavLink to='/operators'>
                        <img src="https://media1.tenor.com/images/80e5ab5fa349f1b75d9405fdbc871e5e/tenor.gif?itemid=14693580" alt='#' />
                    </NavLink>
                </div>
                <div className={s.header__title}>
                        <h1>Терминал для оплаты мобильной связи</h1>
                </div>
            </div>
        </header>
    
    );
}
export default Header;
