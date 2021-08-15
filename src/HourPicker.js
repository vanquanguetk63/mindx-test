import React from "react";

const HourPicker = ({ type, onSetHour }) => {
  return (
    <select
      class="form-select"
      aria-label="Default select example"
      style={{ marginRight: 10, marginBottom: 20 }}
      onChange={(event) => onSetHour(event.target.value)}
    >
      <option selected>{type === "in" ? "Giờ đến" : "Giờ đi"}</option>

      {[...Array(24)].map((obj, index) => (
        <option value={index >= 10 ? `${index}:00` : `0${index}:00`}>
          {index >= 10 ? `${index}:00` : `0${index}:00`}
        </option>
      ))}
    </select>
  );
};

export default HourPicker;
