import React, { Component } from 'react';
import './assets/body.css';

import Megaman from './assets/images/Megaman_moving.gif';
import Colors from './assets/images/colors.gif';
import Panda from './assets/images/Panda.gif';
import Lama from './assets/images/llama.gif';

export default class Examples extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='body__examples'>
        <h2>Example sprites</h2>
        <p>Here are some examples of user submitted sprites from <strong>Piskel</strong>.
          <small> (There is no possibility to download gif from my app)</small></p>
        <div className='body__examples_images'>
          <img src={Megaman} alt='megamen'/>
          <img src={Colors} alt='moving colors'/>
          <img src={Panda} alt='pands'/>
          <img src={Lama} alt='lama'/>
        </div>
      </div>
    );
  }
}
