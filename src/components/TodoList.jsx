import { useState } from "react";

export function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>To-Do-List</h1>
      <input
        value={task}
        onChange={(ev) => {
          setTask(ev.target.value);
        }}
        placeholder="What needs to be done?"
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            const newList = [{ task: task, done: false }, ...list];
            setList(newList);
            setTask("");
          }
        }}
      />
      <ul>
        {list.map((item, index) => {
          if (item.done) return null;
          return (
            <li key={index}>
              {item.task}

              <button
                onClick={() => {
                  const newList = [...list];
                  newList[index].done = true;
                  setList(newList);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <div>{list.filter((item) => !item.done).length} items left</div>
    </div>
  );
}
