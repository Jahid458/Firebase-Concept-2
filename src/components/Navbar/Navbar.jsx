import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContex } from "../AuthProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContex);
  console.log(user);
  return (
    <div className="min-h-20 bg-blue-950 flex text-white justify-between items-center ">
      <div>
        <h1 className="text-xl font-extrabold ml-4">TEETH WIZARD</h1>
      </div>
      <div>
        <NavLink to="/" className="ml-4">
          Home
        </NavLink>
        <NavLink to="/allTreatments" className="ml-4">
          All Treatments
        </NavLink>
        <NavLink to="/myAppointments" className="ml-4">
          My Appointments
        </NavLink>
        <NavLink to="/profiles" className="ml-4">
          Profile
        </NavLink>
      </div>
      <div>
        {user?.photoURL ? (
          <div>
            <img src={user.photoURL} alt="" referrerPolicy="no-referrer" />
            <button onClick={handleLogout}>logout</button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn mr-4 btn-primary">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
