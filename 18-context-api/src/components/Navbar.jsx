import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Navbar = (props) => {
    const data = useContext(ThemeDataContext)
    return (
        <div className="Nav">
            <h2>{data}</h2>
            <Nav2 theme={props.theme} />
        </div>
    )
}

export default Navbar