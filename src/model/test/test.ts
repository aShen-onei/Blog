/**
 * 测试，写个简单的todo
 */
import { IModel } from '@/types/common';
import { Reducer } from 'react';
interface ITestState {
  /**
   * 需要做的事
   */
  todo: string[];
}
interface ITestEffects {
  getTodo: any;
}

interface ITestReducers {
  setTodo: Reducer<ITestState, any>;
}

const TodoModel: IModel<ITestState, ITestEffects, ITestReducers> = {
  namespace: 'todo',
  state: {
    todo: [],
  },
  effects: {
    *getTodo() {},
  },
  reducers: {
    setTodo(state, { payload }) {
      return {
        ...state,
        todo: payload,
      };
    },
  },
};

export default TodoModel;
