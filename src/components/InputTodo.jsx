import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled, priotity, setPriotity } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <select value={priotity} onChange={(event) => setPriotity(event.target.value)}>
        <option value={"-"}>-</option>
        <option value={"高"}>高</option>
        <option value={"中"}>中</option>
        <option value={"低"}>低</option>
      </select>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
