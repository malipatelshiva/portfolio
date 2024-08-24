
import React from 'react';
import './skills.css';
import UIDesign from '../../../Assets/mood-board.png';
import WebDesign from '../../../Assets/website.png';
import AppDesign from '../../../Assets/working-home.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. 
                I have a strong understanding of design and a keen eye for detail. 
                I am proficient in HTML, CSS, JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
            </span>

            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UI/UX Design' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={WebDesign} alt='Website Design' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Website Design</h2>
                        <p>This is demo text can be changed while making the production ready website.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={AppDesign} alt='App Design' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>App Design</h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;