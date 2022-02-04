import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import sushiMain from '../../assets/sushi-main.jpeg';
import logo from '../../assets/logo-satoshisushi.png'
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} alt='Satoshi Sushi' style={{ maxWidth: 300 + 'px', maxHeight: 80 + 'px' }} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={sushiMain} alt='Satoshi Sushi' />
      </div>
    </Fragment>
  );
};

export default Header;
