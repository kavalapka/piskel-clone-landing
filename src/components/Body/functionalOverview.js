import React, { Component } from 'react';
import './assets/body.css';
import Lama from './assets/images/llama.gif';
import Figures from './assets/images/figures.png';
import Dithering from './assets/images/dithering.gif';
import OpenSourse from './assets/images/open-source.gif';

export default class FunctionalOverview extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='body__func-overview'>
        <div className='body__func-overview_left'>
          <div className='body__func-overview_left__item'>
            <div className='item_describe'>
              <h3>Live preview</h3>
              <p>Check a preview of your animation in real time as you draw.<br/>
                Adjust the frame delay on the fly.</p>
            </div>
            <img src={Lama} alt='Live preview'/>
          </div>
          <div className='body__func-overview_left__item'>
            <div className='item_describe'>
              <h3>Draw Figures</h3>
              <p>Draw different figures with one click. Available figures are: <br/>
                Circle, Rectangle, Filled Rectangle and others.</p>
            </div>
            <img src={Figures} alt='Draw Figures'/>
          </div>
        </div>
        <div className='body__func-overview_right'>
          <div className='body__func-overview_right__item'>
            <img src={OpenSourse} alt='Open Source'/>
            <div className='item_describe'>
              <h3>Open Source</h3>
              <p>All the code is open-source and available on GitHub.<br/>
                https://github.com/kavalapka/piskel-clone</p>
            </div>
          </div>
          <div className='body__func-overview_right__item'>
            <img src={Dithering} alt='Open Source'/>
            <div className='item_describe'>
              <h3>Dithering</h3>
              <p>Make image with Dithering</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
