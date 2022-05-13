import React, { Component } from 'react';
import Board from '../../components/board/Board';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="boards-wrapper">
          <Board boardTitle={'work_one'} boardDescription={'frontend'} />
        </div>
      </div>
    );
  }
}
