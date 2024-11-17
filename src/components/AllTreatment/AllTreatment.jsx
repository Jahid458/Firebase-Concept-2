import { useLoaderData } from "react-router-dom";
import Servicecard from "../../Servicecard/Servicecard";

const AllTreatment = () => {
   const services = useLoaderData();
  return <div className="grid gap-6 grid-cols-4  mt-6">
        {
          services.map(service => <Servicecard key={service.id} service={service}></Servicecard>)
        }
  </div>;
};

export default AllTreatment;
