import React from 'react';
import './works.css';


const Works =()=>{
    return(
        <section id='works'>
            <h2 className='worksTitle'>MY Portfolio</h2>
            <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help businesses achive there goals and create a strong online presence. </span>
            <div className='worksImgs'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0baQxb0J93Y7NRDz2NoxuNLAtr9gGz2tE1Zjrlzk8ByUeEB6v'alt=''className='worksImg'/>
                <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPQo_1i6zevIzAWDTjD5UhduGe1brWpHUsxbyrnGo3jh2Toy3r'alt=''className='worksImg'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7VmZ6f6rFZqrkqQWytX8anX3RjwDkDQkMgsAAtkHUuq1D-Ny'alt=''className='worksImg'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5tPYXXQvnFZY3O3vwEvUHsH1POe52sqHsCpfhJJ8ieJ_nRUb'alt=''className='worksImg'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Tt6_KmpXPBTNpmMDMJ9uGaw_nKCeewdqD5aCHzdJ14SzZxgx'alt=''className='worksImg'/>
                <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_iUSdyYwsjrK1YP5FhNoOI1YdLqgbzy9eJAkdvqdI5G3j-yUY'alt=''className='worksImg'/>
            </div>
            <button className='workBtn'>see More</button>
        </section>
    );
}
export default Works;