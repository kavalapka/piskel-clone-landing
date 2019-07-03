import React, { Component } from 'react';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import './assets/mainApp.css';


export default class MainApp extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='main-app'>
        <Header />
        <Body/>
        <Footer/>
      </div>
    );
  }
}
