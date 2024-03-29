import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user){
        // navigate('/home');
        navigate(from, { replace: true });
    }
    return (
        <div>
             <button onClick={ () => signInWithGoogle() } className='btn btn-danger'>Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;