import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { useState } from "react";

function Login() {

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login using UserID and Password</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">UserID</Label>
                <Input
                  type="name"
                  
                  id="name"
                  placeholder="Enter your UserID"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  type="password"
                  
                  id="password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
