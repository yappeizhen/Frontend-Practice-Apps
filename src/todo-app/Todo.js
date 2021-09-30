import { useState } from 'react'
import styled from 'styled-components'

import { Button, Card, Checkbox, Divider, TextField } from '@mui/material';

// Styled Components
const StyledCreateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
`;
const StyledAddButton = styled(Button)`
  && {
    height: 100%;
  }
`;
const StyledTextField = styled(TextField)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
const StyledListContainer = styled.div`
`;
const StyledWrapper = styled.div`
  width: 50%;
`;
const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRowItem = styled.div`
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const toDoData = [
  {
    name: "Walk the dog",
    isComplete: false
  },
  {
    name: "Clean the dog",
    isComplete: false
  },
  {
    name: "Wash the dog",
    isComplete: false
  },
]

function TodoApp() {
  const [todos, setToDos] = useState(toDoData);
  const [newTodo, setNewTodo] = useState();

  const onCheckboxCheck = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    const item = todos.find(element => element.name === e.target.value);
    item.isComplete = !item.isComplete;
    const newTodos = todos.map((obj) => {
      if (obj.name !== item.name) return obj;
      const newObj = { name: obj.name, isComplete: e.target.checked};
      return newObj;
    });
    setToDos(newTodos);
  }
  const onTextChange = (e) => {
    setNewTodo({name: e.target.value, isComplete: false});
  }
  const onSaveTodo = () => {
    setToDos([...todos, newTodo]);
  }

  return (
    <div>
      <h1>To Do</h1>
      <StyledSection>
        <StyledWrapper>
          <StyledCreateContainer>
            <StyledTextField id="outlined-basic" label="Create a new todo..." variant="outlined" value={newTodo?.name ?? ""} onChange={onTextChange} />
            <StyledAddButton variant="contained" onClick={onSaveTodo}>Add</StyledAddButton>
          </StyledCreateContainer>
          <br />
          <StyledListContainer>
            <Card>
              <h2>Tasks list is empty</h2>
              <Divider />
              {todos.map((item) => (
                <>
                  <StyledRowItem key={item.name} style={{ display: "block" }}>
                    <div style={{ float: "left" }}>{item.name}</div>
                    <div style={{ float: "right" }}>
                      <Checkbox style={{padding: 0}} value={item.name} checked={item.isComplete} onChange={onCheckboxCheck}/>  
                    </div>
                  </StyledRowItem>
                  <br />
                  <Divider />
                </>
              ))}
              <StyledRowItem>{todos.filter((e) => (e.isComplete === false)).length} items left</StyledRowItem>
            </Card>
          </StyledListContainer>
        </StyledWrapper>
      </StyledSection>
    </div>
  );
}

export default TodoApp;
