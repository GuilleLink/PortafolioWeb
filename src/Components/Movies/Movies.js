import React, { Component } from 'react';
import './Movies.scss';

class Movies extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const { title } = this.props

        return(
            <div className='main-divider'>
                <div className='lotr'>
                
                </div>
                <div className='spiderman'>                    
                    <div className='spiderman-comic'>
                    </div>
                    <div className='spiderman-text-background'>
                        <div className='spiderman-text'>
                            With great power comes great responsibility...
                        </div>
                    </div>                    
                </div>
                <div className='rick-morty'>
                
                </div>
            </div>
        )
    }
}

export default Movies