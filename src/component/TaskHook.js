import React, { useEffect, useState } from "react";
import UseKamal from "./UseKamal";

const TaskHook = () => {
  const [text] = UseKamal("good");
  return (
    <div>
      <h1> text : {text}</h1>
    </div>
  );
};

export default TaskHook;
