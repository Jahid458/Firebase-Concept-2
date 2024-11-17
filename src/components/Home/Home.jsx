import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Servicecard from "../../Servicecard/Servicecard";
import Feedback from "../Feedback/Feedback";


const Home = () => {
  const services = useLoaderData();
  // console.log(services)

   const {servicesData,feedbackdata} = services;

  return (
    <div className="">
      <Banner></Banner>
      <div className="grid gap-6 grid-cols-4  mt-6">
        {
          servicesData.slice(0,4).map(service => <Servicecard key={service.id} service={service}></Servicecard>)
        }
      </div>
      <button className="mx-auto block bg-red-500 btn btn-primary mt-4">
        <NavLink to="/allTreatments" >Show More</NavLink>
      </button>

      <Feedback feedbackdata={feedbackdata}></Feedback>
    </div>  
  );
};

export default Home;
