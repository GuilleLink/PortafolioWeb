import React, { Component } from 'react';
import './footerstyle.scss';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    redirectFacebook(){
        //https://www.facebook.com/guillermo.sandoval.161214
    }

    redirectLikedIn(){
        //https://www.linkedin.com/in/juan-guillermo-sandoval-582175193/
    }

    redirectInstagram(){
        //https://www.instagram.com/guillermo1612/?hl=es-la
    }

    render(){

        return(
            <div className='all-wrapped-bottom'>
                <button className='facebook-button'></button> 
                <button className='linkedin-button'></button>
                <button className='instagram-button'></button>
            </div>
        )
    }
}

export default Footer