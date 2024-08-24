import React from 'react'
import './contact.css';



const Contact = () => {
    return (
        <div>
            <section id='contactPage'>
                <div id='clients'>
                    <h1 className='contactpageTitle'>My clients</h1>
                    <p className='clientDesc'> I have  had the  opportunity to work with a diverse group of companies.some of notable companies I have worked with includes</p>

                </div>
                <div className='clientImgs'>
                    <img src=''alt='Client'className='clientImg'/>
                    <img src=''alt='Client'className='clientImg'/>
                    <img src=''alt='Client'className='clientImg'/>
                    <img src=''alt='Client'className='clientImg'/>
                </div>
                <div id='contact'>
                    <h1 className='contactpageTitle'>contact Me</h1>
                    <span className='contactDesc'>please fill out the from below to discuss any work opportunites</span>
                    <form className='contactForm'>
                        <input type='text' className='name'placeholder='your Name'/>
                        <input type='email' className='email'placeholder='your Email'/>
                        <textarea className="msg"name='message'rows="5" placeholder='your Message'></textarea>
                        <button type='submit' value='send' className='submitBtn'>Submit</button>
                        <div className='links'>
                            <img src=''alt=''className='link'/>
                            <img src=''alt=''className='link'/>
                            <img src=''alt=''className='link'/>
                            <img src=''alt=''className='link'/>
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}
export default Contact;