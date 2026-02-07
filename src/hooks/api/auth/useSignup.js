
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { signupRequest } from '@/apis/auth';

export const useSignup = () => {
    const { isPending, isSuccess, error, mutateAsync: signupMutation } = useMutation({
        mutationFn: signupRequest,
        onSuccess: (data) => {
            console.log('successfully signed up', data);
            toast.success('Successfully signed up! You will be redirected soon');
        },
        onError: (error) => {
            console.error('failed to sign up', error);
            toast.error(error?.message || 'Failed to sign up');
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};