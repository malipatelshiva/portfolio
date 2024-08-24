import React, { useState } from "react";
import './navbar.css';
import { Link } from 'react-scroll';
import menuIcon from '../../../src/Assets/list.svg';
import contactIcon from '../../../src/Assets/person-lines-fill.svg'

const Navbar = () => {
    const[showMenu,setshowMenu]=useState(false);
    return (
        <nav className = "navbar">
            {/* <img src="" alt="logo" className = 'logo'/> */}
            <h1>MY PORTFOLIO</h1>
            <div className="desktopMenu">
                <Link activeClass="active" to ="intro" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem"> Home </Link>
                <Link activeClass="active" to ="skills" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem"> About </Link>
                <Link activeClass="active" to ="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> portfolio </Link>
                <Link  activeClass="active" to ="clients" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem"> Clinets </Link>

            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementsById('contact').scrollIntroview({behavior:'smooth'});
            }}>
                <img src={contactIcon} alt="" className="desktopMenuImg"/>contact Me </button>

                <img src={menuIcon} alt="menu" className = 'mobMenu'  onClick={()=>setshowMenu(!showMenu)}/>
                <div className="navMenu"style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to ="intro" spy={true} smooth={true} offset={-100} duration={500}className="ListItem"onClick={()=>setshowMenu(false)}> Home </Link>
                <Link activeClass="active" to ="skills" spy={true} smooth={true} offset={-100} duration={500}className="ListItem"onClick={()=>setshowMenu(false)}> About </Link>
                <Link activeClass="active" to ="works" spy={true} smooth={true} offset={-100} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}> portfolio </Link>
                <Link  activeClass="active" to ="clients" spy={true} smooth={true} offset={-100} duration={500}className="ListItem"onClick={()=>setshowMenu(false)}> Clinets </Link>
                <Link  activeClass="active" to ="Contact" spy={true} smooth={true} offset={-100} duration={500}className="ListItem"onClick={()=>setshowMenu(false)}> Contact </Link>

            </div>    
        </nav>

        
    )
};
export default Navbar;