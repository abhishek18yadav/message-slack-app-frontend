import { useSignup } from "@/hooks/api/auth/useSignup.js"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupCard } from "./SignupCard";

export const SignupConatiner = () => {
    
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    })
    const {isPending, isSuccess, error, signupMutation} = useSignup();
    const [validationError, setValidationError] = useState(null);
    async function onSignupFormSubmit(e) {
        e.preventDefault();
        if (!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username) {
            console.log("all fields are mandatory");
            setValidationError({ mesaage: "all fields are required" });
            return;
        }
        if (signupForm.password !== signupForm.confirmPassword) {
            console.log("password and confirmPassword are not same");
            setValidationError({ message: "password does not match" });
            return;
        }
        setValidationError(null);
        await signupMutation({
            email: signupForm.email,
            password: signupForm.password,
            confirmPassword: signupForm.confirmPassword,
            username: signupForm.username
        });
    }
    useEffect(() => {
        if (isSuccess) {
            navigate('/auth/signin');
        }
    }, [isSuccess, navigate]);
    return (
        <SignupCard
            isPending={isPending}
            isSuccess = {isSuccess}
            validationError = {validationError}
            signupForm = {signupForm} 
            setSignupForm = {setSignupForm}
            error= {error}
            onSignupFormSubmit = {onSignupFormSubmit}
        />
    );
};