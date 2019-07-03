import React, { Component } from 'react';
import './assets/footer.css';
import GithubLogo from './assets/images/github.png';
import Copyright from './assets/images/copyright.svg';

export default class Footer extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__github'>
            <img alt='github logo' src={GithubLogo} />
            <a href='https://github.com/kavalapka/piskel-clone' target='_blank' rel='noopener noreferrer'>Github</a>
            <p>Contribute to the development of Piskel Clone.</p>
          </div>
          <div className='footer__copyright'>
            <img alt='copyright icon' src={Copyright}/>
            <span>Developed by:</span>
            <p> kavalapka as project in RSSchool</p>
          </div>
        </div>
      </div>
    );
  }
}
