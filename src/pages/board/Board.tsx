import React from 'react';
import Column from '../../components/column/Column';
import * as Styled from './board.style';

interface IColumn {
  id: number;
  order: number;
  tasks: string[];
}

const Board = () => {
  const columnList: IColumn[] = [
    { id: 1, order: 1, tasks: ['First task', 'Second task'] },
    { id: 2, order: 2, tasks: ['First task', 'Second task'] },
    { id: 3, order: 3, tasks: ['First task', 'Second task'] },
  ];

  return (
    <Styled.Board>
      {columnList.map((column) => (
        <Column key={column.id} tasks={column.tasks} />
      ))}
      <button>Add Column</button>
    </Styled.Board>
  );
};

export default Board;
