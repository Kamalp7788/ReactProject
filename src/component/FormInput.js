import React, { useState } from "react";
const FormInput = () => {
  const [inputs, setInputs] = useState();
  const [data, setData] = useState([]);
  const initialValue = [
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
    {
      user: "",
    },
  ];
  //   const [inputs, setInputs] = useState(initialValue);

  // console.log(input);
  //   const [inputs, setInputs] = useState({
  //     username: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //   });
  //   const [record, setRecord] = useState([]);
  //   const onChangeHandler = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     console.log(value, name);
  //     // setInputs((values) => ({ ...values, [name]: value }));
  //     setInputs(value);
  //   };
  //   const handleSubmit = (e) => {
  //     // alert(`the name you ${inputs.username}`);
  //     // setInputs({});
  //     const newRecord = { ...inputs, id: new Date().getTime().toString() };
  //     console.log(newRecord);
  //     // setRecord({ ...record, newRecord });
  //     setRecord({ ...record, newRecord });
  //     e.preventDefault();
  //     // console.log(record);
  //   };
  const handleSubmitform = (e) => {
    const temData = data;
    temData.push(inputs);
    setData(data);
    setInputs("");
    console.log(data);
    e.preventDefault();
  };
  //   const [data, setData] = useState([]);
  //   const [inputs, setInputs] = useState("");
  //   const clickHandler = () => {
  //     const temData = data;
  //     temData.push(inputs);
  //     setData(data);
  //     setInputs("");
  //     console.log(data);
  //   };
  // <div>
  //   <input
  //     type="text"
  //     value={inputs}
  //     onChange={(e) => setInputs(e.target.value)}
  //   />
  //   <button onClick={clickHandler}>Add</button>
  //   <h1>{data}</h1>
  // </div>
  return (
    <div>
      <div style={{ margin: 12 }}>
        <form action="" onSubmit={handleSubmitform}>
          {initialValue.map((item, index) => (
            <input
              style={{ margin: 12, height: 32, width: "50%" }}
              type="text"
              key={index}
              value={item[index]}
              onChange={(e) => setInputs(e.target.value, ...data)}
            />
          ))}
          <div style={{ margin: 20 }}>
            <h1>{data}</h1>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default FormInput;
