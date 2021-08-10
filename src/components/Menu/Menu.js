import React from 'react';
import logo from '../../img/logo.jpeg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            <h1>Menu Component</h1>
            <img src={logo} />

            <nav>
                <Link to="/">Home</Link>
                <Link to="/ContactPage">Contact</Link>
                <Link to="/FormPage">New Client</Link>
                <Link to="/GallaryPage">Photo Gallery</Link>
            </nav>

            <div>
                <div>Insta</div>
                <div>Facebook</div>
            </div>
        </div>
    )
}
const NavItems = styled.div`
display: flex;
/* flex-direction: ; */
`