import { useReducer, useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter"
}

//Controlled Component
export function CreateContentModal({open, onClose} : {
    open: boolean,
    onClose: () => void 
}) {

    const titleRef = useRef<any>(null);
    const linkRef = useRef<any>(null);
    const [type, setType] = useState(ContentType.YouTube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        
        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers : {
                "authorization": localStorage.getItem("token")
            }
        })
    }

    return (
        <div>
            {open && <div> 
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex-justfy-center">

                </div>
                <div className="w-screen h-screen fixed top-0 left-0 flex-justfy-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4 rounded">
                            <div className="flex justify-end">
                                <div onClick={onClose} className="cursor-pointer">
                                    <CrossIcon></CrossIcon>
                                </div>
                            </div>
                            <div>
                                <Input reference={titleRef} placeholder={"Title"}></Input>
                                <Input reference={linkRef} placeholder={"Link"}></Input>
                            </div>
                            <div>
                                <h1>
                                    Type
                                </h1>
                                <div className="flex gap-1 p-4 justify-center pb-2">
                                    <Button size="md" text="Youtube" variant={type === ContentType.YouTube ? "primary" : "secondary"} onClick={() => {
                                        setType(ContentType.YouTube)
                                    }}></Button>
                                    <Button size="md" text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                        setType(ContentType.YouTube)
                                    }}></Button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Button onClick={addContent} size="md" variant="primary" text="Submit"></Button>
                            </div>
                        </span>
                    </div>
                </div>
            </div>}
        </div>
    )
}