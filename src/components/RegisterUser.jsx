import { ethers } from 'ethers';
import React, { useState } from 'react'
import { abi } from '../const';

const RegisterUser = ({signer}) => {
  const [name,setName] = useState("");
  async function addVoter(){
    const contract = new ethers.Contract("0x501C00eB5135f0505746DAf7ad3f737251625cf2",abi,signer);
    await contract.registerVoter(name).then((res)=>{
      console.log(res);
    }).catch(()=>{
      alert(`already registered`);
    })
  }
  return (
    <div>
      REGISTER AS USER
      <br />
      <label>NAME</label>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={addVoter}>REGISTER</button>
    </div>
  )
}

export default RegisterUser
