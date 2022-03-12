// import { getAuth, signOut } from "firebase/auth";
// import { useContext } from "react";
// import { useNavigate } from "react-router";
// import { UserContext } from "../context/UserContext";

// export const AuthenticatedPage = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const { user } = useContext(UserContext);
//   const logout = () => {
//     signOut(auth).then(() => navigate("/"));
//   };

//   const makeAuthenticatedRequest = () => {
//     user
//       ?.getIdToken()
//       .then((jwt) => {
//         return fetch("", {
//           method: "GET",
//           headers: {
//             Authorization: jwt,
//           },
//         });
//       })
//       .then((ret) => console.log(ret));
//   };

//   return (
//     <>
//       <h1>Authenticated Page</h1>
//       <button onClick={() => makeAuthenticatedRequest()}>
//         Make Authenticated Request
//       </button>
//       <button onClick={() => logout()}>Sign Out</button>
//     </>
//   );
// };
