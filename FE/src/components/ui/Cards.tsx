import { PlusIcon } from "../../icons/PlusIcon";

interface CardProp {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}

export function Card({title, link, type}: CardProp) {
    return (
        <div>
            <div className="p-4 bg-white rounded-md max-w-72 border-gray-200 border min-h-48 min-w-72">
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            <PlusIcon size="md"></PlusIcon>
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500" >
                            <a href={link} target="_blank">
                                <PlusIcon size="md"></PlusIcon>
                            </a>
                        </div>
                        <div className="text-gray-500">
                            <PlusIcon size="md"></PlusIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")}
                    title="YouTube video player" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>}
                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}
            </div>            
        </div>
    )
}