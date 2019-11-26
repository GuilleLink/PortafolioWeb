import React, { Component } from 'react';
import './headerstyle.scss';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className='all-wrapped'>
                <button >Hola</button>   
            </div>
        )
    }
}

export default Header