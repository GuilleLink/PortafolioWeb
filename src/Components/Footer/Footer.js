import React, { Component } from 'react';
import './footerstyle.scss';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    redirectFacebook(){
        window.location.href = "https://www.facebook.com/guillermo.sandoval.161214";
    }

    redirectLikedIn(){
        window.location.href = "https://www.linkedin.com/in/juan-guillermo-sandoval-582175193/";
    }

    redirectInstagram(){
        window.location.href = "https://www.instagram.com/guillermo1612/?hl=es-la";
    }

    render(){

        return(
            <div className='all-wrapped-bottom'>
                <button className='facebook-button' onClick={() => {this.redirectFacebook()}}></button> 
                <button className='linkedin-button' onClick={() => {this.redirectLikedIn()}}></button>
                <button className='instagram-button' onClick={() => {this.redirectInstagram()}}></button>
            </div>
        )
    }
}

export default Footer