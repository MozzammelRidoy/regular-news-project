import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../public/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);


    // registration with email and pass
    const createNewUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    // user login with email and password via firebase
    const logInWithEmail = (email, password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password); 
    }


    // forget password user
    const forgetPassword = (email) => {
        setLoading(true); 
        return sendPasswordResetEmail(auth, email)
    }

    // user sign in via google 
    const googleProvider = new GoogleAuthProvider(); 
    const googleLogin = () => {
        setLoading(true); 

        return signInWithPopup(auth, googleProvider); 
    }


    // user sign in via github 
    const githubProvider = new GithubAuthProvider(); 
    const githubLogin = () => {
        setLoading(true); 

        return signInWithPopup(auth, githubProvider); 
    }


    //user sign out 
    const LogOut = () => {
        return signOut(auth); 
    }


    // user state change and o
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser=>{

            // console.log('User Ovserving', currentUser)
            setUser(currentUser)
            setLoading(false); 
        }); 
        return ()=> {
            unSubcribe(); 
        }
    },[])






    const authInfo = {
        user, 
        createNewUser, 
        logInWithEmail, 
        forgetPassword, 
        googleLogin, 
        githubLogin,  
        LogOut,
        loading

    
                    }; 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;