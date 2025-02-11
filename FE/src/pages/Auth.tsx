import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const usernameRef = useRef<any>(null);
    const PasswordRef = useRef<any>(null);
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = PasswordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {            
            username,
            password
        })
        alert("You have signed Up!")
        navigate("/signin")
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="Username"></Input>
                <Input reference={PasswordRef} placeholder="Password"></Input>
                <div className="flex justify-center pt-4">
                    <Button size="md" variant="primary" text="Signup" fullwidth={true} onClick={signup}></Button>
                </div>
            </div>
        </div>
    )
}

export function Signin() {

    const usernameRef = useRef<any>(null);
    const PasswordRef = useRef<any>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = PasswordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {            
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="Username"></Input>
                <Input reference={PasswordRef} placeholder="Password"></Input>
                <div className="flex justify-center pt-4">
                    <Button size="md" variant="primary" text="Signin" fullwidth={true} onClick={signin}></Button>
                </div>
            </div>
        </div>
    )
}