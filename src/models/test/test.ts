/**
 * 测试，写个简单的todo
 */
import { IModel } from '@/types/common';
import { Reducer } from 'react';
import { Effect } from 'umi';
export interface ITestState {
  /**
   * 需要做的事
   */
  todos: string[];
}
interface ITestEffects {
  getTodo: Effect;
}

interface ITestReducers {
  setTodo: Reducer<ITestState, any>;
}

const TodoModel: IModel<ITestState, ITestEffects, ITestReducers> = {
  namespace: 'todo',
  state: {
    todos: [],
  },
  effects: {
    *getTodo() {},
  },
  reducers: {
    setTodo(state, { payload }) {
      return {
        ...state,
        todos: payload,
      };
    },
  },
};

export default TodoModel;
