import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function Signup() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input placeholder="Username"></Input>
                <Input placeholder="Password"></Input>
                <div className="flex justify-center pt-4">
                    <Button size="md" variant="primary" text="Signup" fullwidth={true}></Button>
                </div>
            </div>
        </div>
    )
}

export function Signin() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input placeholder="Username"></Input>
                <Input placeholder="Password"></Input>
                <div className="flex justify-center pt-4">
                    <Button size="md" variant="primary" text="Signin" fullwidth={true}></Button>
                </div>
            </div>
        </div>
    )
}