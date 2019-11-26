import React, { Component } from 'react';
import './christmasstyle.scss';

class Christmas extends Component{
    constructor(props){
        super(props);
    }

    

    render(){

        return(
            <div className='christmas-background'>                
                <div className='christmas-image'>
                    <div className='christmas-border'>
                        <div className='holiday-wishes'>
                            Merry Christmas
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Christmas