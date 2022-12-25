import React from "react";
import { useDispatch } from "react-redux";
import { decrementer, incrementer } from "../features/recordsCounterSlice";

const Form = () => {
  const dispatch = useDispatch();
  return (
    <form>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(incrementer());
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(decrementer());
        }}
      >
        -
      </button>
    </form>
  );
};

export default Form;
