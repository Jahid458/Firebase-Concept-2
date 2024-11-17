import { useContext } from "react";
import { authContex } from "../AuthProvider/AuthProvider";

const Modal = ({ treatment }) => {
  const { user } = useContext(authContex);
  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.Fname.value;
    const lname = e.target.Lname.value;
    const email = e.target.email.value;
    const treatment2 = treatment;
    const info = {
      fname,
      lname,
      email,
      treatment2,
    };

    let saveData = [];
    const localData = localStorage.getItem("appoinments");
    if (localData) {
      saveData = JSON.parse(localData);
    }
    saveData.push(info);
    localStorage.setItem("appoinments", JSON.stringify(saveData));
  };


  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form action="" onSubmit={handleSubmit}>
          <div>
            First Name
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="Fname"
            />
          </div>
          <div>
            Last Name
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="Lname"
            />
          </div>

          <div>
            Email
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="email"
              value={user?.email}
            />
          </div>
          <div>
            Phone Number
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="phone"
            />
          </div>
          <div>
            Appointment date
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered input-primary w-full "
              name="date"
            />
          </div>
          <div>
            Address
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="address"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Make Appoinment
          </button>
        </form>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
