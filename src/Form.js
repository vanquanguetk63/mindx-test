import React, { useEffect, useState } from "react";
import HourPicker from "./HourPicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ data, onChangeData }) => {
  const [fullName, setFullName] = useState();
  const [address, setAddress] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [hourIn, setHourIn] = useState();
  const [hourOut, setHourOut] = useState();

  const onSubmit = () => {
    let arr = {
      fullName: fullName,
      address: address,
      startDate: startDate,
      hourIn: hourIn,
      hourOut: hourOut,
    };
    data.push(arr);
    localStorage.setItem("data", JSON.stringify(data));
    onChangeData(arr);

    alert("Thêm khách hàng thành công.");
  };

  return (
    <div className="col-4" style={{ left: "30%", backgroundColor: "#FFFFFF" }}>
      <div className="form-group">
        <label>
          Họ và tên
          <span className="text-danger">*</span>
        </label>
        <input
          onChange={(event) => setFullName(event.target.value)}
          name="fullName"
          className="form-control"
        />
        <br />
        <label>
          Địa chỉ
          <span className="text-danger">*</span>
        </label>
        <input
          onChange={(event) => setAddress(event.target.value)}
          name="address"
          className="form-control"
        />
        <br />

        <HourPicker type="in" onSetHour={(index) => setHourIn(index)} />

        <HourPicker type="out" onSetHour={(index) => setHourOut(index)} />

        <br />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <br />
        <div class="card-footer">
          <button type="reset" class="btn btn-primary mr-2" onClick={onSubmit}>
            Submit
          </button>
          <button type="reset" class="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
