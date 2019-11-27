import React, { Component } from 'react';
import './headerstyle.scss';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className='all-wrapped'>
                <div className='header-text'>Juan Guillermo Sandoval In A Nutshell</div>   
            </div>
        )
    }
}

export default Header