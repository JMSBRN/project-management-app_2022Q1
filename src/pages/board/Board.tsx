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
  const [columnList, setColumnList] = useState<IColumn[]>([]);

  const buttonClick = () => {
    const idColumn: number = columnList.length;
    setColumnList([
      ...columnList,
      { id: idColumn, title: 'New Column', order: idColumn, tasks: [] },
    ]);
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
