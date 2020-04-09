import React from 'react';
import logo from '../../logo.svg';
import './index.css';

export default class Loading extends React.Component{
  render() {
    return (
      <div className="Loading">
          <img src={logo} className="LoadingImg" alt="logo" />
      </div>
    );
  }
}