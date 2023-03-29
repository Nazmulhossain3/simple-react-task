import React from 'react';
import './Player.css'

const Player = (props) => {
    
  const{name,index,player,price,_id} = props.player
 
    return (
        <div className='player-details'>
            <img src={player} alt="" />
            <h3>player name : {name}</h3>
             <p>price : {price}</p>
             {
                !props.showPlayer.find(item => item._id === _id) && <button className='btn-cart' onClick={()=>props.handleShowPlayer(props.player)} >Add to Cart</button>
             }
  
        </div>
    );
};

export default Player;