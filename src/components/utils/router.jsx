import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import AllTreatment from "../AllTreatment/AllTreatment";
import MyAppoinments from "../MyAppoinments/MyAppoinments";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: async ()=>{
          const servicesRes = await fetch("/service.json")
          const servicesData = await servicesRes.json()

          const feedBackRes = await fetch("/happyclients.json")
          const feedbackdata = await feedBackRes.json();
          return {servicesData,feedbackdata}

        }
      },
      {
        path:'/allTreatments',
        element: <AllTreatment></AllTreatment>,
        loader: ()=>fetch("/service.json")

      },
      {
        path:'/myAppointments',
        element: <PrivateRoute>
          <MyAppoinments></MyAppoinments>
        </PrivateRoute>
      },
      {
        path: "/profiles",
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: "/details/:id",
        element:<PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: async({params})=>{
          const res = await fetch("/service.json")
          const data = await res.json()
          // console.log(data,params.id)
          const singleData = data.find(d=>d.id == params.id)
          // console.log(singleData)
          return singleData
        }
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
