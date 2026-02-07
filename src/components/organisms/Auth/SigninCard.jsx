import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
export function SigninCard({validationError,onSigninformSubmit,isPending,isSuccess,error , signinForm,setSigninForm}) {
    const navigate = useNavigate();
    return (
        <Card className='w-full h-full'>
            <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>verify yourself</CardDescription>
            </CardHeader>
            {validationError && (
                    <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
                        <TriangleAlert className='size-5' />
                        <p>{validationError.message}</p>
                    </div>
            )}
            {error && (
                <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
                        <TriangleAlert className='size-5' />
                        <p>{error.message}</p>
                </div>
            )}
            {isSuccess && (
                <div className='bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-5'>  
                        <FaCheck className='size-5' />
                        <p>
                            Successfully signed in. You will be redirected to the home page in a few seconds.
                            <LucideLoader2 className="animate-spin ml-2" />
                        </p>
                    </div>
            )}
            <CardContent>
                <form onSubmit={onSigninformSubmit} className="space-y-3">
                    <Input
                        placeholder='email'
                        required
                        onChange={(e) => { setSigninForm({...signinForm, email : e.target.value}); }}
                        value={signinForm.email}
                        type='email'
                        disabled={isPending}
                    />
                    <Input
                        placeholder='password'
                        required
                        onChange={(e) => { setSigninForm({...signinForm, password :e.target.value}); }}
                        value={signinForm.password}
                        type='password'
                        disabled={isPending}
                    />
                    <Button disabled={isPending}
                            size="lg"
                            type="submit"
                             className="w-full"
                    >
                        continue
                    </Button>
                </form>

                <Separator className='my-5'/>
                                
                <p className="text-5 text-muted-foreground mt-4">
                    Don't have an acoount ? {' '}<span onClick={()=>{navigate('/auth/signup');}} className="text-sky-600 hover:underline cursor-pointer">Sign up</span>
                </p>
            </CardContent>
        </Card>
    );
}