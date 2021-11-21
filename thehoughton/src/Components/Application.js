import React, { Component } from 'react';

class Application extends Component {
    constructor (props) {
        super (props);
    
    }

    render() {
        return (
            <div className='Application'>
                <img className='ApplicationIcon' src={this.props.path} alt='hello' />
                <h1 className='ApplicationTitle'>{this.props.title}</h1>
            </div>
        )
    }
}

export default Application;