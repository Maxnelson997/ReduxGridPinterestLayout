import React, { Component } from 'react';
import Nav from './nav';
import Footer from './footer';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Nav className='layout__nav'/>
        <div className='layout__content'>
          {this.props.children}
        </div>
        <Footer className='layout__footer'/>
      </div>
    );
  }
}
