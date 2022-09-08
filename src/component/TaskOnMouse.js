import React, { useState } from "react";

const TaskOnmouse = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Count : {count}
      <br />
      <br />
      <button
        onClick={() => setCount(count - 1)}
        onMouseOver={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default TaskOnmouse;
