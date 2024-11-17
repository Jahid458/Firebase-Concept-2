import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { authContex } from "../AuthProvider/AuthProvider";

const Details = () => {
  const {  description, treatment, image } = useLoaderData();
  const contextValue = useContext(authContex);
  console.log(contextValue)

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
          <p className="mb-5">
           {description}
          </p>
          <button  onClick={() => document.getElementById("my_modal_5").showModal()} className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
      <Modal treatment={treatment}></Modal>
    </div>
  );
};

export default Details;
