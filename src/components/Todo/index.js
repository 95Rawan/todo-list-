import React from "react";

import {
  TodoItem,
  CheckboxTitleContainer,
  Checkbox,
  Title,
  DeleteButton,
} from "./index.style";

const Todo = ({ todos }) => {
  return todos.map(({ id, title, completed }) => {
    return (
      <TodoItem key={id}>
        <CheckboxTitleContainer>
          <Checkbox type="checkbox" />
          <Title>{title}</Title>
        </CheckboxTitleContainer>

        <DeleteButton>Delete</DeleteButton>
      </TodoItem>
    );
  });
};

export default Todo;
