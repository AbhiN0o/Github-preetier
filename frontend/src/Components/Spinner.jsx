import { LoaderCircle } from "lucide-react";

export default function Spinner(){
    return(
        <span className="w-full flex justify-center"><LoaderCircle className="animate-spin text-blue-600" /></span>
    )
}