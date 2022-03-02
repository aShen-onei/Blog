import { ConnectState } from '@/models/connectState';
import { Button, Input, notification } from 'antd';
import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import _ from 'lodash';
interface ITodoProps {
  dispatch: Dispatch;
  todos: string[];
}

const Todo: React.FC<ITodoProps> = (props) => {
  const { todos, dispatch } = props;
  const [inputValue, setInputValue] = useState<string>('');
  const addTodo = () => {
    if (_.isEmpty(inputValue)) {
      notification.error({ message: '不能添加空事件！' });
      return;
    }
    let newTodo = [...todos];
    newTodo.push(inputValue);
    dispatch({
      type: 'todo/setTodo',
      payload: newTodo,
    });
  };

  return (
    <div>
      <div>
        <Input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          width={500}
        ></Input>
        <Button onClick={addTodo} type="primary">
          添加
        </Button>
      </div>
      {todos.map((t) => {
        return <div>{t}</div>;
      })}
    </div>
  );
};

export default connect(({ todo }: ConnectState) => ({
  todos: todo.todos,
}))(Todo);
