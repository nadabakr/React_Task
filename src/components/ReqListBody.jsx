import React from "react";
import ListHeader from "./ListHeader";
import TourismCompanyCard from "./TourismCompanyCard";
import StatistcsCard from "./StatistcsCard";

const ReqListBody = () => {
  
  return (
    <div className="page-content">
      <ListHeader />
      <TourismCompanyCard />
      <StatistcsCard />
    </div>
  );
};

export default ReqListBody;
