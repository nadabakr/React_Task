import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "../assets/images/5.png";
import img2 from "../assets/images/6.png";
import img3 from "../assets/images/7.png";
import img4 from "../assets/images/8.png";
import img5 from "../assets/images/9.png";
import img6 from "../assets/images/10.png";
import img7 from "../assets/images/11.png";
import img8 from "../assets/images/12.png";

const StatistcsCard = () => {
  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [statistics, setstatistics] = useState([]);
  useEffect(() => {
    axios
      .get("json/statistics.json")
      .then((res) => {
        setstatistics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2>احصائيات الرخص والتصاريح</h2>
      <div className="statistics">
        {statistics.length > 0 &&
          statistics.map((statistic, index) => {
            return (
              <div className="statistic" key={index}>
                <img src={imgArray[index]} alt="icon" className="icon" />
                <h5>{statistic.name}</h5>
                <div className="mony-deserved">
                  المبلغ المستحق <span>{statistic.mony_deserved}</span>
                </div>
                <div className="total-number">
                  العدد الإجمالي <span>{statistic.total_number}</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default StatistcsCard;
