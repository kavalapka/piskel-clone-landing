import React, { Component } from 'react';
import AboutProject from './aboutProject';
import Examples from './examples';
import FunctionalOverview from './functionalOverview';
import './assets/body.css';
import '../Header/assets/header.css';

export default class Body extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='body'>
        <AboutProject/>
        <Examples/>
        <FunctionalOverview/>
      </div>
    );
  }
}
