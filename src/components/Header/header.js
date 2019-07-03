import React, { Component } from 'react';
import './assets/header.css';

export default class Header extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='header'>
        <h1 className='header__title'>Piskel Clone</h1>
        <a className='header__start' href='https://kavalapka.github.io/piskel-clone/'
           target='_blank' rel="noopener noreferrer">Create Sprite</a>
      </div>
    );
  }
}
