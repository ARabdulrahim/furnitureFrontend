// import { createContext, useContext, useState } from "react";

// export const AuthContext=createContext();
// export function AuthProvider(props){
//     // const token=localStorage.getItem("Token");
//     // const[authToken, setAuthToken]=useState(token ? JSON.parse(token) : null);
//     const[token,setToken] = useState(localStorage.getItem("Token"));

//     function setsessionStorage(token){

//         localStorage.setItem("token",token);
//         setToken(localStorage.getItem("token"));
//     }

//     function clearsessionStorage(){

//         setToken(null);
//         localStorage.clear();
//     }

//     let login = !! localStorage.getItem("token");
//     console.log(login)
//     console.log(localStorage.getItem("token"))

//     const data={
//         login, token, setToken, setsessionStorage, clearsessionStorage
//     }

//     return (
//        <AuthContext.Provider value={data}>
//         {props.children};
//        </AuthContext.Provider>
//     );
// }


// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export const useAuth = () => useContext(AuthContext);

// import React, { useState } from 'react'
// import AuthContext from './AuthContext'


// function AuthProvider({children}) {
//   const token=localStorage.getItem("Token");
//   const[authuser, setAuthuser]=useState(token ? JSON.parse(token) : null);
//    const data={authuser}
//   return (
//     <AuthContext.Provider value={{data}}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider
