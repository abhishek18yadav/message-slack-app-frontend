import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
export function SigninCard() {
    const navigate = useNavigate();
    const [signinForm, setSigninform] = useState({
        email: '',
        password: '',
    })
    return (
        <Card className='w-full h-full'>
            <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>verify yourself</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-3">
                    <Input
                        placeholder='email'
                        required
                        onChange={(e) => { setSigninform(...signinForm, email = e.target.value) }}
                        value={signinForm.email}
                        type='email'
                        disabled={false}
                    />
                    <Input
                        placeholder='password'
                        required
                        onChange={(e) => { setSigninform(...signinForm, password = e.target.value) }}
                        value={signinForm.password}
                        type='password'
                        disabled={false}
                    />
                    <Button disabled={false}
                            size="lg"
                            type="submit"
                             className="w-full"
                    >
                        continue
                    </Button>
                </form>

                <Separator className='my-5'/>
                                
                <p className="text-5 text-muted-foreground mt-4">
                    Don't have an acoount ? {' '}<span onClick={()=>{navigate('/auth/signup')}} className="text-sky-600 hover:underline cursor-pointer">Sign up</span>
                </p>
            </CardContent>
        </Card>
    )
}