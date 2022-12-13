import React, { useState } from 'react';
import './left-menu.css';
import { Button, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const LeftMenu = () => {
    const navigate = useNavigate();
    const onSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };
    return (
        <>
            <ListGroup>
                <NavLink to={'/'} className={'navlink-text'}>
                    <ListGroup.Item action className='border-0 text-start'>
                        Group
                    </ListGroup.Item>
                </NavLink>
                <NavLink to={'/presentation'} className={'navlink-text'}>
                    <ListGroup.Item action className='border-0 text-start'>
                        Presentation
                    </ListGroup.Item>
                </NavLink>
            </ListGroup>
        </>
    );
};
export default LeftMenu;
