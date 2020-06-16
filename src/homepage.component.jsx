import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Berlangganan Kopi</h1>
                    <span className="subtitle">Cek Bos</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Alat Kopi</h1>
                    <span className="subtitle">Cek Bos</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Seduh Kopi Dirumah</h1>
                    <span className="subtitle">Cek Bos</span>
                </div>                
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Bibit Untuk Indonesia</h1>
                    <span className="subtitle">Cek Bos</span>
                </div>                
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Wholesale</h1>
                    <span className="subtitle">Cek Bos</span>
                </div>                
            </div>
        </div>
    </div>
);

export default HomePage;
