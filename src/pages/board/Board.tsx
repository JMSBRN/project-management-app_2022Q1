import React, { useState } from 'react';
import Column from '../../components/column/Column';
import * as Styled from './board.style';
import Button from './../../components/button/Button';

interface IColumn {
  id: number;
  title: string;
  order: number;
  tasks: string[];
}

const Board = () => {
  const columnListBase: IColumn[] = [
    {
      id: 1,
      title: 'Task 1',
      order: 1,
      tasks: [
        'First task',
        'Second task',
        'Bla bla bla',
        '3. Super task',
        'First task',
        'Second task',
        'Bla bla bla',
        '3. Super task',
        'First task',
        'Second task',
        'Bla bla bla',
        '3. Super task',
      ],
    },
    { id: 2, title: 'Task 2', order: 2, tasks: ['First task', 'Second task'] },
    { id: 3, title: 'Task 3', order: 3, tasks: ['First task', 'Second task', 'task task task'] },
  ];

  const [columnList, setColumnList] = useState<IColumn[]>(columnListBase);

  const buttonClick = () => {
    setColumnList([...columnList, { id: 4, title: 'Task +++', order: 4, tasks: [] }]);
  };

  return (
    <Styled.Board>
      {columnList.map((column) => (
        <Column key={column.id} title={column.title} tasks={column.tasks} />
      ))}
      <Button textButton="Add Column" onClick={buttonClick} />
    </Styled.Board>
  );
};

export default Board;
