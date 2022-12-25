import React from "react";
import ReqListBody from "../../components/ReqListBody";
// import Form from "../../components/Form";
import SideBar from "../../components/SideBar";

const RecordesList = () => {
  return (
    <div className="recording-list-wrapper">
      <SideBar />
      <ReqListBody />
    </div>
  );
};

export default RecordesList;
