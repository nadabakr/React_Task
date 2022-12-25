import { createBrowserRouter } from "react-router-dom";
import RecordesList from "../pages/RecordingList/RecordesList";
import ReservationRequest from "../pages/ReservationRequest/ReservationRequest";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RecordesList />, 
    },
    {
        path: "/reservation-req",
        element: <ReservationRequest />, 
      },
  ]);
  

export default router

