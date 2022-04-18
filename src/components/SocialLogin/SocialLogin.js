import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if(user){
        navigate('/home');
    }
    return (
        <div>
             <button onClick={ () => signInWithGoogle() } className='btn btn-danger'>Signin With Google</button>
        </div>
    );
};

export default SocialLogin;