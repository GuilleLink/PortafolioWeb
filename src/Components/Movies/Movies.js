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
                    <div className='lotr-text'>
                        One Ring To Rule Them All
                    </div>
                    <div className='lotr-background-image'>

                    </div>
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
                    <div className='rick-morty-text'>
                        Congrats Tony!!! Have fun with your stupid toilet!!!
                    </div>
                    <div className='rick-morty-background'>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies