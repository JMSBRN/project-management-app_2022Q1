import React from 'react';
import * as Styled from './taskForm.styled';

const TaskForm = () => {

    return (
        <>
            <Styled.Form>
                <Styled.Title>Create new task</Styled.Title>
                <label>Task name:</label>
                <Styled.Form_input type="text" value="" placeholder="Enter task name" />
                <label>Task description:</label>
                <Styled.Form_input type="text" value="" placeholder="Enter task description" />
                <label>User:</label>
                <Styled.Form_input type="text" value="" placeholder="Enter user" />
                <Styled.Form_input_submit type="submit" value="Create task" />
            </Styled.Form>
        </>
    )
}

export default TaskForm;