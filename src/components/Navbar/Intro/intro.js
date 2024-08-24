import React from "react";
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../../Assets/shivakumar (1).png';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Shiva Kumar</span> <br />Website Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating visually appealing and user-friendly websites.</p>

                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                    <button className="btn"> Hire Me</button>
                </Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    );
};

export default Intro;
