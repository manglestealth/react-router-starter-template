import type { LoaderFunctionArgs } from "react-router";

export default function(){
    return (
        <>hello</>
    )
}


export function loader({request, params}:LoaderFunctionArgs){
    console.log('params',params);
    console.log('request',request);
}