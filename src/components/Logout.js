import { useEffect } from "react"
import Cookies from "js-cookie"

export default function Protect() {
    


    useEffect(()=>{
        Cookies.remove('jwt')
        window.location.href = '/'
    },[])

    return (
        <div>protect</div>
    )
}