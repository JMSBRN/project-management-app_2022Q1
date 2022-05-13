import React, { Component } from 'react';
import Board from '../../components/mainBoard/MainBoard';
import * as Styled from './Main.style';

export default class Main extends Component {
  boards = [
    { title: 'work_one', description: 'frontend' },
    { title: 'work_two', description: 'frontend_2' },
    { title: 'work_three', description: 'frontend_3' },
  ];
  render() {
    return (
      <Styled.Boards_list>
        {this.boards.map((el, idx) => (
          <Board key={idx} boardTitle={el.title} boardDescription={el.description} />
        ))}
      </Styled.Boards_list>
    );
  }
}
