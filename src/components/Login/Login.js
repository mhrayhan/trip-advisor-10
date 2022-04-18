import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Header/Header';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    

    const navigate= useNavigate();

const handleSignin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);

    if(user){
        navigate('/home');
    }
    
}
    return (
        <div>
            <Header></Header>
            <h2 className='text-center'>Please Login</h2>
            <div className='login-form'>
                <Form onSubmit={handleSignin} className='p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
            <p className='p-2 pb-3'>Are you new in Trip advisor? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
           <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;