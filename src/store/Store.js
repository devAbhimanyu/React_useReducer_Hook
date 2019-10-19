import React from "react";
import * as actions from "./reducerActions";
export const Context = React.createContext();

const initialState = {
  list: [
    {
      itemId: 1,
      task: "Add the delete functionality",
      completed: false
    }
  ]
};

function updateCheckbox(state, itemId) {
  const list = [...state.list];
  const updatedList = list.map(item => {
    if (item.itemId === itemId) {
      item.completed = !item.completed;
    }
    return item;
  });
  return {
    ...state,
    list: updatedList
  };
}

function addNewItem(state, task) {
  const list = [...state.list];
  const newItem = {
    itemId: list.length + 1,
    task: task,
    completed: false
  };
  return {
    list: [...state.list, newItem]
  };
}

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.addItem:
      return addNewItem(state, payload.todoItem);
    case actions.removeItem:
      return {
        ...state
      };
    case actions.updateList:
      return updateCheckbox(state, payload.itemIndex);
    default:
      return state;
  }
};

export const Store = props => {
  const [todoList, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ todoList, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
