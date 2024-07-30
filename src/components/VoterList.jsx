import { ethers } from 'ethers'
import React from 'react'
import { abi } from '../const'
import "./global.css"

const VoterList = ({name,signer,voteCnt,index,setList}) => {
    async function v(){
        const contract = new ethers.Contract(
          "0x501C00eB5135f0505746DAf7ad3f737251625cf2",
          abi,
          signer
        );
        await contract.vote(index).then(async (res)=>{
            console.log(res);
            await contract.getCandidates().then((res)=>{setList(res)})
        }).catch((err)=>{
            alert(err.reason)
        })
    }
  return (
    <div id="candi">
      <span>{name}</span>
      <button onClick={v}>VOTE</button>
      <span>{voteCnt}</span>
    </div>
  )
}

export default VoterList
