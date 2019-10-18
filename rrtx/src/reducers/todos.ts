import { Todo } from '../actions';
import { ActionTypes, Action } from '../actions/types';


export const todosReducer = (
  state: Todo[] = [],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}