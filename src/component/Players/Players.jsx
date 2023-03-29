import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import ShowPlayer from "../ShowPlayer/ShowPlayer";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [showPlayer,setShowPlayer] = useState([])
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleShowPlayer = (player)=> {
    const addedPlayer =showPlayer.find(singlePlayer => singlePlayer._id === player._id)
    if(addedPlayer){
      return
    }
    setIsDisabled(false);
    const detailPlayer = [...showPlayer,player]
    
   
    //   for(const id in players){
  //    
  //    if(addedPlayer){
  //     setShowPlayer(detailPlayer)
  //   }
   
    
  
  // }
    
  setShowPlayer(detailPlayer)
    
  

  }
  

  return (
    <div className="players-Container">
      
      <div className="player-profile">
        {players.map((player) => <Player player={player} showPlayer={showPlayer}
        handleShowPlayer={handleShowPlayer} isDisabled={isDisabled}></Player>)}
      </div>

     
      <div className="players-details">

        <ShowPlayer showPlayer={showPlayer}></ShowPlayer>
    </div>
    
    </div>
  );
};

export default Players;
