import "./style.css";

import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count">
      <div className="count-value">{count}</div>
      <button className="increase" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="decrease" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Count;
