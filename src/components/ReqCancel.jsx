import React from "react";
import { useNavigate } from "react-router";

function ReqCancel() {
  const navigate = useNavigate();

  return (
    <div className="row">
      <hr className="text-muted"></hr>
      <button
        type="button"
        className=" btn btn-link text-decoration-none text-muted"
        style={{ textAlign: "left", padding: "1rem 0 20rem 2rem" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <i
          className="fa fa-times fa-2x mx-2 text-danger "
          aria-hidden="true"
        ></i>
        إلغاء الطلب
      </button>
    </div>
  );
}

export default ReqCancel;
