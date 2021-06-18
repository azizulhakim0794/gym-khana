import React, { useContext } from 'react';
import './Login.css'
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './FirebaseConfig/FirebaseConfig'
import google from '../../Image-&-Icon/google.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [userData , setUserData] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const singInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const user = result.user;
                const { displayName, email, photoURL, uid } = user
                const isSignedInGoogle = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    uid: uid
                }

                setUserData(isSignedInGoogle)

                
                if (userData.emailVerified) {
                    history.replace(from);
                    
                }
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                if(errorCode||errorMessage||email||credential){
                    console.log(errorMessage,errorCode,email,credential);
                  }
            });
    }
    return (
        <div className="container text-center">
            <div className="top-margin-50">
                <h1 className="text-center">Logged in With Google</h1>
            </div>
            <br />
            <div className="">
                <div className="card col-xg-6 col-sm-10 col-12 col-md-8 col-lg-5  margin-auto py-5 ">
                    <br /><br />
                    <div className="d-flex justify-content-center">
                        <div className="card col-md-9 p-1 loginGoogle round-pill" onClick={singInWithGoogle}>
                            <div>
                                <img src={google} className="google" alt="" /><span className="ms-3">Login With Google</span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <p className="text-center new-account text-primary">Create a new account</p>
                    <br />
                </div>
            </div>
        </div>

    );
};

export default Login;