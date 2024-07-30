import { ethers } from 'ethers'
import React,{useState} from 'react'
import { abi } from '../const'

const RegisterCandidate = ({signer}) => {
  const [name,setName] = useState("");
  async function addCandidate(){
    const contract = new ethers.Contract("0x501C00eB5135f0505746DAf7ad3f737251625cf2",abi,signer);
    await contract.registerCandidate(name).then((res)=>{
      console.log(res);
    }).catch(()=>{
      alert(`already registered`)
    })
  }
  return (
    <div>
      REGISTER AS A CANDIDATE
      <br />
      <label>NAME</label>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={addCandidate}>REGISTER</button>
    </div>
  )
}

export default RegisterCandidate
