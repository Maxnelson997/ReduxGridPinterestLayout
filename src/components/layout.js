import React, { Component } from 'react';
import Nav from './nav';
import Footer from './footer';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Nav className='layout__nav'/>
        {this.props.children}
        <Footer className='layout__footer'/>
      </div>
    );
  }
}
