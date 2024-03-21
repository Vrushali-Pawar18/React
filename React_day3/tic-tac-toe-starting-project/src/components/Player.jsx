import { useState } from "react";

export default function Player({initialName,symbol}){
    const[playerName, setPlayername] =useState(initialName);
    const[isEditing,setIsEditing] = useState(false);
    
    function handleEditClick(){
        // setIsEditing(!isEditing); // schedules a state update to true
        // setIsEditing(!isEditing); // schedules a state update to true

        setIsEditing((editing) => !editing);
        // setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayername(event.target.value);
    }

    let editPlayername = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit';

    if(isEditing){
        editPlayername = <input type="text" required value={playerName} onChange={handleChange}/>
        //  btnCaption = 'Save';
    }
    return(
        <li>
            <span className="player">
             {editPlayername}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}