import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

const Nav = () => {

    const [activeItem, setActiveItem] = useState('home');
    let history = useHistory();

    const handleItemClick = (e, { name }) => {
        history.push(`/${name === 'home' ? '' : name}`)
        setActiveItem(name);
    }

    useEffect(() => {
        setActiveItem(window.location.pathname === '/' ? 'home' : 'saved-repos');
    }, [window.location.pathname])

    return (

        <div className='nav'>
            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='saved-repos'
                    active={activeItem === 'saved-repos'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>

    )
}

export default Nav;