import React from "react";
import { IntlProvider } from "react-intl";
import Beneficiary from "../../components/Beneficiary"
import CommercialActivitiy from "../../components/CommercialActivitiy";
import ReqCancel from "../../components/ReqCancel";
import { ReqNav } from "../../components/ReqNav";
import ReservationForm from "../../components/ReservationForm";
import ReservationReq from "../../components/ReservationReq";

const ReservationRequest = () => {
  return (
      <IntlProvider locale="en" defaultLocale="ar">
      <ReqNav></ReqNav>
      <div className='section-box'>
      <ReservationReq></ReservationReq>
      <Beneficiary></Beneficiary>
      <CommercialActivitiy></CommercialActivitiy>
      <ReservationForm></ReservationForm>
      <ReqCancel></ReqCancel>
      </div>
      </IntlProvider>
  )
}

export default ReservationRequest
