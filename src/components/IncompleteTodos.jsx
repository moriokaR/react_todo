import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClicComplete, onClicDelete} = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClicComplete(index)}>完了</button>
                <button onClick={() => onClicDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
