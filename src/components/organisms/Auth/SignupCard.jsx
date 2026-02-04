import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const SignupCard = () => {
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword:'',
        username: ''
    });
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle> Sign up</CardTitle>
                <CardDescription> Sign up to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-3">
                    <Input
                        placeholder='Email'
                        required
                        onChange={(event) => setSignupForm({ ...signupForm, email:event.target.value })}
                        value={signupForm.email}
                        type='email'
                        disabled={false}
                    />
                    <Input
                        placeholder='password'
                        required
                        onChange={(event) => setSignupForm({ ...signupForm, password: event.target.value })}
                        value={signupForm.password}
                        type='password'
                        disabled={false}
                    />
                    <Input
                        placeholder='Confirm Password'
                        required
                        onChange={(event) => { setSignupForm({ ...signupForm, confirmPassword: event.target.value }) }}
                        value={signupForm.confirmPassword}
                        type='password'
                        disabled={false}
                    />
                    <Input
                        placeholder='username'
                        required
                        onChange={(e) => { setSignupForm({ ...signupForm, username: e.target.value }) }}
                        value={signupForm.username}
                        type='text'
                        disabled={false}
                    />
                    <Button disabled={false}
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
    )
}