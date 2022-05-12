import React, { Component } from 'react';
import Button from '../../components/button/Button';
import './authForm.css';

export class AuthForm extends Component {
  render() {
    return (
      <div>
        AuthForm
        <div>User state</div>
        <Button textButton="Log-in" />
        <Button textButton="Log-out" />
      </div>
    );
  }
}
