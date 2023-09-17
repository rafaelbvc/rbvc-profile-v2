// import { promisify } from "util";
// import jwt from "jsonwebtoken";
// import { useEffect, useState } from "react";

// // interface IUseValidate {
// //     req: Request,
// //     res: Response,
// //     next: NextFunction
// // }

// const useAuth = () =>{
//     const [isAuth, setIsAuth] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem("token")

//         if(token) {
//             api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
//             setIsAuth(true)
//         }

//         setLoading(false)
//     }, [])

//     const handleLogin = async() => {
//         const { data: {token} } = await api.post
//     }

// }

// export default useAuth;
