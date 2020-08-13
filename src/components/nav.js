import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        const { className } = this.props; 
        return (
            <div className={`nav ${className}`}>
                navbar
            </div>
        )
    }
}
