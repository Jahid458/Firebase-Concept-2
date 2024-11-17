import { useContext, useState } from "react";
import { authContex } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const {handleGoogleLogin,handleLogin} = useContext(authContex);
  const [error,setError] = useState("")
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    handleLogin(email,password)
    .then(res=>{
      navigate(location.state.from)
    })
    .catch(err => {
      setError(err.message)
    })
   }


   const googleLoginHandeler = () =>{
      handleGoogleLogin()
      .then(res=>{
        navigate(location.state.from)
      })
   }
     
  return (

    <div>
    <form action="" onSubmit={handleSubmit}>

       <div>
        Email <input
           type="text"
           placeholder="Type here"
           className="input input-bordered input-error w-full max-w-xs"
           name="email"
           required
         />
       </div>
       <div>
         Password <input
           type="text"
           placeholder="Type here"
           className="input input-bordered input-error w-full max-w-xs"
           name="password"
           required
         />
       </div>
 
       <button  type="submit">Login</button>
     </form>
     {error && <p className="text-red-500">{error.split("/").slice(0,18)}</p>}
     <button onClick={googleLoginHandeler}>Google Login</button>
     {/* <button onClick={handleLogout}>Logout</button> */}
 </div>
 

  )
 
};

export default Login;
