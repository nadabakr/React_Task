import axios from "axios";
import React, { useEffect, useState } from "react";
import icon1 from "../assets/images/1.png";
import icon2 from "../assets/images/2.png";
import icon3 from "../assets/images/3.png";
import icon4 from "../assets/images/4.png";

const TourismCompanyCard = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("json/recordsData.json")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {records.length > 0 &&
        records.map((record, index) => {
          return (
            <div key={index} className="company-record">
              <div className="header">{record.name}</div>
              <div className="conditions">
                <div className="condition">
                  حالة السجل <span>{record.record_condition}</span>
                </div>
                <div className="condition">
                  نوع السجل <span>{record.record_type}</span>
                </div>
              </div>
              <div className="more-data">
                <div className="type detail">
                  <img src={icon1} alt="" />
                  <p>
                    <span>نوع الكيان </span>
                    <span>{record.company_type}</span>
                  </p>
                </div>
                <div className="date detail">
                  <img src={icon2} alt="" />

                  <p>
                    <span>تاريخ الانتهاء</span>
                    <span>{record.expiry_date}</span>
                  </p>
                </div>
                <div className="unified-number detail">
                    <img src={icon3} alt="" />
                  <p>
                    <span>الرقم الموحد للمنشأة </span>
                    <span>{record.unified_number}</span>
                  </p>
                </div>
                <div className="trading-number detail">
                <img src={icon4} alt="" />

                  <p>
                    <span>رقم السجل التجاري </span>
                    <span>{record.record_number}</span>
                  </p>
                </div>
              </div>
              <button className="show-record">عرض وإدارة السجل</button>
            </div>
          );
        })}
    </>
  );
};

export default TourismCompanyCard;
