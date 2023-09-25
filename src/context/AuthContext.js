import { createContext } from 'react';


export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [userToken, setUserToken] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const { fetchPost, result, isError } = usePost();


//     const handleLogin = async (email, password) => {
//         try {
//             setIsLoading(true);
//             await fetchPost("auth/userLogin", { email, password });
//             if (result.errorCode && result.errorCode !== 0)
//                 Alert.alert("Lỗi đăng nhập!!", "Tài khoản hoặc mật khẩu không đúng!")
//             if (result.errorCode && result.errorCode === 0) {
//                 await AsyncStorage.setItem('token', result.token);
//                 setUserToken(result.token);
//             }
//             setIsLoading(false);
//         } catch (e) {
//             // saving error
//             console.log("error login handle!", e);
//         }
//     }

//     const handleLogOut = async () => {
//         setIsLoading(true);
//         setUserToken(null);
//         await AsyncStorage.removeItem('token');
//         setIsLoading(false);
//     }

//     const LoginToken = async () => {
//         try {
//             setIsLoading(true);
//             const token = await AsyncStorage.getItem('token');
//             if (token)
//                 setUserToken(token);
//             setIsLoading(false);
//         } catch (e) {
//             console.log("error login by token", e);
//         }
//     }


//     useEffect(() => {
//         LoginToken()

//     }, [])

//     // useEffect(() => {
//     //     console.log("result", result)
//     //     const getToken = async () => {
//     //         if (result.errorCode && result.errorCode !== 0)
//     //             Alert.alert("Lỗi đăng nhập!!", "Tài khoản hoặc mật khẩu không đúng!")
//     //         if (result.errorCode && result.errorCode === 0)
//     //             try {
//     //                 await AsyncStorage.setItem('token', result.token);
//     //                 setUserToken(result.token)
//     //             } catch (e) {
//     //                 // saving error
//     //                 console.log("save token error!", e);
//     //             }
//     //     }
//     //     getToken();
//     // }, [result])

//     const auth = {
//         userToken,
//         isLoading,
//         handleLogin,
//         handleLogOut,
//     }
//     return (
//         <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
//     );
// };