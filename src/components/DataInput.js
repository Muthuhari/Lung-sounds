import { useState,useEffect } from "react"
import { jwtVerify } from "jose";
import Cookies from "js-cookie";
import "../styles/DataInput.css";
export default function App() {

  const [url, setURL] = useState('')
  const [wav,setWav] = useState('')
 

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
    setWav(file)
    const reader = new FileReader()
    const url = URL.createObjectURL(file);
    setURL(url);
  }

  const handler2 = async(event) => {

    const formData = new FormData()
    formData.append('file',wav)
    const res  = await fetch('https://res.cloudinary.com/drlx72mlc/image/upload/v1672690915/hzyxlhpotrzmekt9ekcm.jpg- methanat API connect link',{
    method:'POST',

    body:formData
    })
    
  }
  return (
    <div className="putaudio">

      <div className="w3-panel1">
        {
          url &&
          <wav src={url} className="putaudio1" />
        }
      </div>
      <div className="text">
      <div className="putaudio2">
        <input type="file" className="putaudio_1" onChange={handler1} />
        
        <div className="putaudio_2">
        <button  onClick={handler2} type="submit">send</button>
        </div>
      </div>
      </div>
      
    </div>
  
  )
}





























{/*.heading img {
  width: 100px;
  height: 200px;
  margin-top: 10px;
}
======================
const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "", label: "Select Contact Number" },
    { value: "1234567890", label: "1234567890" },
    { value: "0987654321", label: "0987654321" },
    { value: "1111111111", label: "1111111111" },
  ];
---
<select
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}