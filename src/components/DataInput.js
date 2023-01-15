import { async } from "@firebase/util";
import { useState,useEffect } from "react"
import { jwtVerify } from "jose";
import Cookies from "js-cookie";
import "../styles/DataInput.css";
export default function App() {

  const [url, setURL] = useState('')
  const [img,setImg] = useState('')
  const [predicted_class,set_predicted_class] = useState(null)
  const [confidence,set_confidence] = useState(null)


  const verify = async(tkn)=>{
    try {
     const {payload} = await jwtVerify(tkn,new TextEncoder().encode('Hello-World'))
     console.log(payload);
    } catch (error) {
     console.log({error:error.message});
     window.location.href = '/login'
    }
 }

 useEffect(()=>{
     const jwt = Cookies.get('jwt')
     verify(jwt)
 },[])

  const handler1 = (event) => {
    const file = event.target.files[0];
    setImg(file)
    const reader = new FileReader()
    const url = URL.createObjectURL(file);
    setURL(url);
  }

  const handler2 = async(event) => {

    const formData = new FormData()
    formData.append('file',img)
    const res  = await fetch('https://res.cloudinary.com/drlx72mlc/image/upload/v1672690915/hzyxlhpotrzmekt9ekcm.jpg- methanat API connect link eka danna halo',{
    method:'POST',

    body:formData
    })
    const {predicted_class,confidence} = await res.json()

    console.log(predicted_class,confidence);
    set_predicted_class(predicted_class)
    set_confidence(confidence)
  }


  return (
    <div className="demo">

      <div className="w3-panel1">
        {
          url &&
          <img src={url} className="demo1" />
        }
      </div>
      <div className="text">
      <div className="demo2">
        <input type="file" className="demo2_1" onChange={handler1} />
        
        <div className="demo2_2">
        <button  onClick={handler2} type="submit">send</button>
        </div>
      </div>

      <div className="demo3">
        {predicted_class && <div>Predicted:{predicted_class}</div>}
        {confidence && <div>Confidence:{confidence}</div>}
      </div>
      </div>
      
    </div>
  
  )
}
