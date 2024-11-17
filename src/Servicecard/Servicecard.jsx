import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Servicecard = ({ service }) => {
  // console.log(service);
  const {treatment,image,description,cost,id} = service; 
  return (
    <div className="card bg-base-100  shadow-xl ">
      <figure>
        <img
          src={image}
          alt="Shoes"
         className="h-[200px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">${cost}</div>
        </h2>
        <p title={description}>{description.slice(0,100)}...</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
              <button className="badge badge-outline bg-primary p-4 text-white font-bold">Checkout More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
