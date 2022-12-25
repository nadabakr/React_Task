import React, { useEffect } from "react";
import logo from "../assets/images/logo.svg";
import sadaia from "../assets/images/SDAIA-Logo-2.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../features/userInfoSlice";
import { useNavigate } from "react-router";

const SideBar = () => {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // API Calling And Storing User Info Using User Reducer
  useEffect(() => {
    if (!user?.id) {
      axios
        .get("json/userData.json")
        .then((res) => {
          dispatch(setUser(res.data[0]));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }, []);

  return (
    <div className="side-bar">
      <div className="bar-body">
        <img className="logo" src={logo} alt="logo" />
        <span className="greeting">مرحبا</span>
        <div className="profile-info">
          <i className="fa fa-user-o outline user" aria-hidden="true"></i>
          <p>{user?.name}</p>
          <i className="fa fa-sign-out ico-out" aria-hidden="true"></i>
        </div>
        <ul className="pages">
          <li>
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>الرئيسية</span>
          </li>
          <li>
            <i className="fa fa-clipboard" aria-hidden="true"></i>
            <span>الطلبات الواردة </span>
          </li>
          <li>
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
            <span> طلباتي</span>
          </li>
          <li>
            <i className="fa fa-columns" aria-hidden="true"></i>
            <span> سجل العناوين </span>
          </li>
          <li>
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <span> التفاويض</span>
          </li>
        </ul>
        <div className="services">
          <span>الخدمات الالكترونية</span>
          <ul className="service-list">
            <li>
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              <span> حجز اسم تجاري</span>
            </li>
            <li>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <span>تجديد سجل تجاري </span>
            </li>
            <li>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
              <span> شطب سجل تجاري</span>
            </li>
          </ul>
        </div>
        <div className="links">
          <span>روابط اخرى</span>
          <ul className="link-list">
            <li>
              <span> منصة العمل</span>
            </li>
            <li>
              <span> الخدمات الالكترونية</span>
            </li>
            <li>
              <span> تواصل معنا</span>
            </li>
          </ul>
        </div>
        <div className="bar-tail">
          <div className="card">
            <p>
              <strong>إصدار سجل تجاري</strong>
            </p>
            <p>
              إذا كنت لا تعلم نوع الكيان التجاري <a>اضغط هنا</a>
            </p>
            <button
              onClick={() => {
                navigate("/reservation-req");
              }}
            >
              ابداالان
            </button>
          </div>
          <div className="card-light">
            <p>
              <strong>إصدار رخصة فورية لسجل تجري قائم</strong>{" "}
            </p>
            <button>اصدار الرخص التجارية</button>
          </div>
          <div className="copy-right">
            <img src={sadaia} alt="sadaia" width="100px" />
            <p className="ttwyeer">
              تطوير الهيئةالسعودية للبيانات والذكاء الاصطناعي
            </p>
            <p className="reserved">
              @2021 جميع الحقوق محفوظة للمركز السعودي للاعمال الاقتصادية
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
