import "./App.css";
import Form from "../src/Form";
import List from "./List";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const list = localStorage.getItem("data");
    setData(JSON.parse(list));
  }, []);

  const onChangeData = (arr) => {
    let newArr = data;
    newArr.push(arr);
    console.log("zooo");
    setData(newArr);
  };

  return (
    <div className="container d-flex flex-column justify-content-center App">
      <h1 className="text-center">
        <b>Cửa hàng thực phẩm</b>
      </h1>

      <br />

      <div className="row">
        <div className="col-12">
          <h3>Danh sách khách hàng đến cửa hàng</h3>
          <br />
          <List data={data} />
        </div>
      </div>

      <br />

      <div className="row d-flex flex-column">
        <div className="col-12">
          <h3>Nếu bạn cần giúp đỡ hãy điền vào đây</h3>
          <Form data={data} onChangeData={onChangeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
