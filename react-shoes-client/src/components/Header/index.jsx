import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss';
import {useCart} from "../../hooks/useCart";

const Header = ({onClickCart}) => {

  const {totalPrice} = useCart();

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <div className={styles.headerLeftSide}>
          <img width={80} height={60} src="https://i.ytimg.com/vi/l56I3fa7fts/hqdefault.jpg" alt="logo"/>
          <div className="headerInfo">
            <h3>ALL-STARS SNEAKERS</h3>
            <p>Convers Life</p>
          </div>
        </div>
      </NavLink>
      <ul className={styles.headerRightSide}>
        <li onClick={onClickCart}>
          <img className="cartIcon" width={40} height={40}
               src="https://s3-us-west-1.amazonaws.com/sweeper-production-merchantimage/dp_5d3ef58f83889769800f158b.jpg"
               alt=""/>
          <span>{totalPrice} uah.</span>
        </li>
        <li>
          <NavLink to="/favorites">
            <img className={styles.favoriteIcon} width={40}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/2048px-Ei-heart.svg.png"
                 alt=""/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <img src="http://www.cherkasyoblenergo.com/uploads/posts/2018-02/1519657152_img_508630.png" alt="profile"/>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
