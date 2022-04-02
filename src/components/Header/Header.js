import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Routing Webpage</h1>
            <div className='links'>
                {/* normal / basic react router link  */}
                <Link to='/home'>Home</Link>
                <Link to='/comments'>Comments</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                
                {/* link with active styles  */}
                {/* <span><NavLink to="/">Home</NavLink></span>
                <span><NavLink to="/comments">Comments</NavLink></span>
                <span><NavLink to="/about">About</NavLink></span>
                <span><NavLink to="/contact">Contact</NavLink></span>
                <span><NavLink to="/products">Products</NavLink></span> */}

            </div>
        </div>
    );
};

export default Header;