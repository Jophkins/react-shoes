import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="headerLeftSide">
        <img width={80} height={60} src="https://i.ytimg.com/vi/l56I3fa7fts/hqdefault.jpg" alt="logo"/>
        <div className="headerInfo">
          <h3>ALL-STARS SNEAKERS</h3>
          <p>Convers Life</p>
        </div>
      </div>
      <ul className="headerRightSide">
        <li>
          <img width={40} height={40}
               src="https://s3-us-west-1.amazonaws.com/sweeper-production-merchantimage/dp_5d3ef58f83889769800f158b.jpg"
               alt=""/>
          <span>1250 uah.</span>
        </li>
        <li>
          <img src="http://www.cherkasyoblenergo.com/uploads/posts/2018-02/1519657152_img_508630.png" alt="profile"/>
        </li>
      </ul>
    </header>
  );
};

export default Header;
