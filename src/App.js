import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RegisterUser from "./components/RegisterUser";
import RegisterCandidate from "./components/RegisterCandidate";
import VoterList from "./components/VoterList";
import Dummy from "./components/Dummy";
import { ethers } from "ethers";
import { abi } from "./const";
import "./components/global.css";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [stat, setStat] = useState(false);
  const [list, setList] = useState([]);
  useState(async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);
    const signer = await provider.getSigner();
    setSigner(signer);
    const contract = new ethers.Contract(
      "0x501C00eB5135f0505746DAf7ad3f737251625cf2",
      abi,
      signer
    );
    await contract.getCandidates().then(async (res) => {
      setList(res);
    });
  });
  return (
    <div className="App">
      <Navbar setStat={setStat} />
      {stat ? (
        <>
          <RegisterUser signer={signer} />
          <br />
          <RegisterCandidate signer={signer} />
          <div id="dum">
            <Dummy />
          </div>
          {list.map((item, index) => {
            return (
              <div id="lst">
                <VoterList
                  name={item.name}
                  signer={signer}
                  voteCnt={parseInt(item.count)}
                  index={index}
                  setList={setList}
                />
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}

export default App;
