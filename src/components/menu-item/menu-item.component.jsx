import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.22), rgba(0, 0, 0, 0.33)), url(${imageUrl})`
    }} className="background-image"></div>
    <div className="content">
        <h1 className="title">{ title.toUpperCase() }</h1>
        <span className="subtitle">Cek Bos</span>
    </div>
  </div>
);

export default withRouter(MenuItem);