import React from "react";
import { useSelector } from "react-redux";

const ListHeader = () => {
  const total = useSelector((state) => state.totalRecord);
  return (
    <div className="list-header">
      <h2>قائمة السجلات التجارية</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            العدد الكلي <span>{total.count}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            السجلات الفرعية <span>1</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            عدد سجلات المؤسسات <span>3</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            السجلات المفضلة <span>0</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ListHeader;
