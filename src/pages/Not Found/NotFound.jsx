import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full  flex items-center justify-center">
            <Card className="text-center shadow-lg  max-w-[36rem] ">
                <CardHeader>
                    <CardTitle>404 Not Found</CardTitle>
                    <CardDescription className="text-gray-600">this page you are looking foe doesn't exist</CardDescription>
                </CardHeader>
                <CardContent>
                    <img
                        className="rounded-lg shadow-lg"
                        src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
                    />
                    <Button variant = "outline" onClick = {()=>{navigate(-1);}} className="mt-4">
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};