import React, { useEffect, useState } from "react";

const List = ({ data }) => {
  const [page, setPage] = useState(0);
  const pageNumber = 5;
  const pageSize = data ? Math.floor(data.length / pageNumber + 1) : 1;
  return (
    <div className=" d-flex flex-column justify-content-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Họ tên</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Thời gian đến</th>
            <th scope="col">Thời gian đi</th>
            <th scope="col">Ngày</th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined
            ? data
                .slice(page * pageNumber, pageNumber * (page + 1))
                .map((obj, index) => (
                  <tr>
                    <td>{obj.fullName}</td>
                    <td>{obj.address}</td>
                    <td>{obj.hourIn}</td>
                    <td>{obj.hourOut}</td>
                    <td>{obj.startDate.substr(0, 10)}</td>
                  </tr>
                ))
            : null}
        </tbody>
      </table>
      <nav aria-label="Page navigation d-flex justify-content-center">
        <ul class="pagination">
          <li
            class="page-item"
            onClick={() => {
              if (page > 0) setPage((index) => index - 1);
            }}
          >
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {[...Array(pageSize)].map((obj, index) => (
            <li
              class={index === page ? "page-item active" : "page-item"}
              onClick={() => setPage(index)}
            >
              <a class="page-link" href="#">
                {index + 1}
              </a>
            </li>
          ))}
          <li
            class="page-item"
            onClick={() => {
              if (page < pageSize - 1) setPage((index) => index + 1);
            }}
          >
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default List;
