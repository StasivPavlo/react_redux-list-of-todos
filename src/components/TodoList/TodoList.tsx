/* eslint-disable max-len */
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

interface Props {
  todos: Todo[] | null,
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {!todos?.length && (
        <p className="notification is-warning">
          There are no todos matching current filter criteria
        </p>
      )}

      <table className="table is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>#</th>

            <th>
              <span className="icon">
                <i className="fas fa-check" />
              </span>
            </th>

            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {todos?.map(todo => (
            <TodoItem todo={todo} />
          ))}
        </tbody>
      </table>
    </>
  );
};
