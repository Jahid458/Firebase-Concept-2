/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../firebase/firebase.config';
export const authContex = createContext();



const AuthProvider = ({ routes }) => {
  // eslint-disable-next-line no-unused-vars
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
   
  
  const googleProvider = new GoogleAuthProvider()
const handleRegister =  (email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
  
  
}
 const handleLogin = (email,password)=>{
  return  signInWithEmailAndPassword(auth,email,password)

 }

 const handleLogout = () =>{
  return  signOut(auth)
 }


 const handleGoogleLogin = () =>{
  return  signInWithPopup(auth,googleProvider)
 }

 const manageProfile = (name,image) =>{
  updateProfile(auth.currentUser,{
    displayName:name,photoURL:image
  })
 }

 const authInfo ={
  handleRegister,
  handleLogin,
  handleLogout,
  handleGoogleLogin,
  manageProfile,
  user,
  setUser,
  loading
 }


 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
        console.log(currentuser)
        if(currentuser){
          setUser(currentuser)
        }
        else{
          setUser(null)
        }

        setLoading(false)

        return ()=>{
          unsubscribe()
        }

    })
 },[])


  return (
    <div>
      <authContex.Provider value={authInfo}>{routes}</authContex.Provider>
    </div>
  );
};

export default AuthProvider;
