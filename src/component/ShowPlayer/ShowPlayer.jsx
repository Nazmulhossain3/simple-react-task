import React from 'react';


const ShowPlayer = (props) => {
    
    let total = 0;
    for(const player of props.showPlayer){
    total = total + player.price
    
       
    }

    return (
        <div>
            {
                props.showPlayer.map(player => (<div>
                   <h3>name : {player.name}</h3>
                   <p>price : {player.price}</p>
               </div>))
            }
            
           <p>total price : {total}</p>
        </div>
    );
};

export default ShowPlayer;