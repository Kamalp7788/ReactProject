import React, { useEffect, useState } from "react";

const UseKamal = (string) => {
  const [text, setText] = useState(string);
  useEffect(() => {
    setText(() => text.toUpperCase());
  }, [text]);
  return [text];
};

export default UseKamal;
