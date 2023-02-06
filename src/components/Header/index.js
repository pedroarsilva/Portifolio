import React from 'react';
import "./style.css"

function Header(){
  return (
    <div className='header-wraper'>
        <div className='left'>
            <div className='left-wrapper'>
                <h2 className='intro-header'>Hello! My name is</h2>
                <h1 className='name-intro-header'>Pedro Augusto</h1>
                <div className='main-info'>
                    <h4>
                        Web Deselopment <span>fullstack ReactJS</span> and API's!
                        
                    </h4>
                    
                </div>
                <div className='title'>
                    <div className='title-wrapper'>
                        <div className='title-item'>ReactJS Developer</div>
                        <div className='title-item'>NodeJS Developer</div>
                        <div className='title-item'>API Developer</div>
                        <div className='title-item'>NextJS Developer</div>
                        <div className='title-item'>Style Component</div>
                    </div>
                </div>
                {/* <div className='main-info'>
                teste
                </div> */}
            </div>
            {/* <hr/> */}
        </div>
    </div>
  )
}

export default Header;
