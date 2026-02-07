import { LucideLoader2 , TriangleAlert } from 'lucide-react';
import {FaCheck} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
export const SignupCard = ({isPending , isSuccess , validationError , signupForm , setSignupForm , error , onSignupFormSubmit}) => {
    const navigate = useNavigate();

    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle> Sign up</CardTitle>
                <CardDescription> Sign up to access your account</CardDescription>
                {validationError && (
                    <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert className="size-5"/>
                        <p>{validationError.message }</p>
                    </div>
                )}
                {error && (
                    <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert className="size-5"/>
                        <p>{error.message }</p>
                    </div>
                )}
                {isSuccess && (
                    <div className="bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-5">
                        <FaCheck className="size-5"/>
                        <p>Successfully signed up . you will be redirected to login page in few secondes</p>
                        <LucideLoader2 className="animate-spin ml-2"/>
                    </div>
                )}
            </CardHeader>
            <CardContent>
                <form onSubmit={onSignupFormSubmit}  className="space-y-3">
                    <Input
                        placeholder='Email'
                        required
                        onChange={(event) => setSignupForm({ ...signupForm, email:event.target.value })}
                        value={signupForm.email}
                        type='email'
                        disabled={isPending}
                    />
                    <Input
                        placeholder='password'
                        required
                        onChange={(event) => setSignupForm({ ...signupForm, password: event.target.value })}
                        value={signupForm.password}
                        type='password'
                        disabled={isPending}
                    />
                    <Input
                        placeholder='Confirm Password'
                        required
                        onChange={(event) => { setSignupForm({ ...signupForm, confirmPassword: event.target.value }); }}
                        value={signupForm.confirmPassword}
                        type='password'
                        disabled={isPending}
                    />
                    <Input
                        placeholder='username'
                        required
                        onChange={(e) => { setSignupForm({ ...signupForm, username: e.target.value }); }}
                        value={signupForm.username}
                        type='text'
                        disabled={isPending}
                    />
                    <Button disabled={isPending}
                        size="lg"
                        type="submit"
                        className="w-full"
                    >
                        Continue
                    </Button>
                </form>

                <Separator className="my-5" />
                
                <p className="text-5 text-muted-foreground mt-4">
                    Already have an acoount ? {' '}<span onClick={() => navigate('/auth/signin')} className="text-sky-600 hover:underline cursor-pointer">Sign in</span>
                </p>
            </CardContent>
        </Card>
    );
};