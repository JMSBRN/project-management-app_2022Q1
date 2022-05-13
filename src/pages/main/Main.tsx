import React, { Component } from 'react';
import Board from '../../components/board/Board';
import * as Styled from './Main.style';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Styled.Boards>
          <Board boardTitle={'work_one'} boardDescription={'frontend'} />
          <Board boardTitle={'work_two'} boardDescription={'frontend_2'} />
          <Board boardTitle={'work_three'} boardDescription={'frontend_3'} />
        </Styled.Boards>
      </div>
    );
  }
}
