import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/context/useAuth';
import { signInRequest } from '@/apis/auth';

export const useSignin = () => {
    const { setAuth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('successfully signed in', data);
            const userObject = JSON.stringify(response.data);
            localStorage.setItem('user', userObject);
            localStorage.setItem('token', response.data.token);
            setAuth({
                token: response.data.token,
                user: response.data,
                isLoading:false
            })
            toast.success("Successfully signed up! You will be redirected soon");
        },
        onError: (error) => {
            console.log('failed to sign in', error);
            toast.error(error?.message || "Failed to sign up");
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};