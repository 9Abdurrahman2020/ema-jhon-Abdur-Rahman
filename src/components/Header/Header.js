import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/manage-inventory">Manage-Inventory</a>
            </nav>
        </div>
    );
};

export default Header;