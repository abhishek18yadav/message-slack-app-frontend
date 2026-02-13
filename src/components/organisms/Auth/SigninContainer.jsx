import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignin } from '@/hooks/api/auth/useSignin.js';

import { SigninCard } from './SigninCard.jsx';


export const SigninContainer = () => {
    const navigate = useNavigate();
    const [signinForm , setSigninForm] = useState({
        email: '',
        password:''
    });
    const { isPending, isSuccess, error, signinMutation } = useSignin();
    const [validationError, setValidationError] = useState(null);
    async function onSigninformSubmit(e) {
        e.preventDefault();
        if (!signinForm.email || !signinForm.password) {
            console.log('All fields are mandatory');
            setValidationError({ message: 'All fields are mandatory' });
            return;
        }
        setValidationError(null);
        await signinMutation({
            email: signinForm.email,
            password: signinForm.password
        });
    }
    useEffect(()=>{
        if (isSuccess) {
            console.log("successfully signed in , now gointo home" , isSuccess);
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }
    }, [isSuccess, navigate]);
    
    return (
        <SigninCard
        validationError={validationError}
        onSigninformSubmit={onSigninformSubmit}
        isPending={isPending}
        isSuccess={isSuccess}
        error={error}
        signinForm={signinForm}
        setSigninForm={setSigninForm}
        />
    );
};