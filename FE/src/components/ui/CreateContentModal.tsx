import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

//Controlled Component
export function CreateContentModal({open, onClose} : {
    open: boolean,
    onClose: () => void 
}) {
    return (
        <div>
            {open && <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex-justfy-center">
                <div className="bg-white opacity-100 flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon></CrossIcon>
                            </div>
                        </div>
                        <div>
                            <Input placeholder={"Title"}></Input>
                            <Input placeholder={"Link"}></Input>
                        </div>
                        <div className="flex justify-center">
                            <Button size="md" variant="primary" text="Submit"></Button>
                        </div>
                    </span>
                </div>
            </div>}
        </div>
    )
}