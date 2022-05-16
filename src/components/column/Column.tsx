import React, { useState } from 'react';
import Button from '../button/Button';
import { Task } from '../task/Task';
import * as Styled from './column.style';

interface IProps {
  title: string;
  tasks: string[];
}

const Column = (props: IProps) => {
  const [tasksList, setTasksList] = useState<string[]>([...props.tasks]);

  const clickButton = () => {
    setTasksList([...props.tasks, 'New task']);
  };

  return (
    <>
      <Styled.Column>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.Column_list>
          {tasksList.map((task, i) => (
            <Task key={props.title + i} task={task} />
          ))}
        </Styled.Column_list>
        <Button textButton="Add task" onClick={clickButton} />
      </Styled.Column>
    </>
  );
};

export default Column;
