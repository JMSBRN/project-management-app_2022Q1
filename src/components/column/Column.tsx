import React from 'react';
import { Task } from '../task/Task';
import * as Styled from './column.style';

interface IProps {
  tasks: string[];
}

const Column = (props: IProps) => {
  return (
    <>
      <Styled.Column>
        Title
        {props.tasks.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </Styled.Column>
    </>
  );
};

export default Column;
