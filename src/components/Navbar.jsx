import { ethers } from 'ethers';
import React, { useState } from 'react'

const Navbar = ({setStat}) => {
    const [isConnected,setIsConnected] = useState("Connect");
    async function connect(){
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setIsConnected(await signer.getAddress())
        setStat(true);
    }

  return (
    <div>
      <button onClick={connect}>{isConnected}</button>
    </div>
  )
}

export default Navbar
