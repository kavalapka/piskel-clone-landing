import React, { Component } from 'react';
import './assets/body.css';
import '../Header/assets/header.css';
import Screenshot from './assets/images/piskel-screenshot.png';

export default class AboutProject extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='body__about-project'>
        <div className='about-project_about'>
          <p>Piskel Clone is a <span>free online editor</span> for
            <span> animated sprites</span> & <span>pixel art</span>
          </p>
          <p className='about-project_p'>Create animation in your browser</p>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a className='about-project_button header__start' href='https://kavalapka.github.io/piskel-clone/' target='_blank'>Create Sprite</a>
        </div>
        <div className='about-project_screenshot'>
          <img alt='demo screenshot' src={Screenshot} />
        </div>
      </div>
    );
  }
}
