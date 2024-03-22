import { useState, useRef} from "react";

export default function Player() {

  const playerName = useRef();

  const[enteredplayername,setenteredPlayername] = useState('');
  // const[submitted,setSubmitted] = useState(false);
  // function handleChange(event){
  //   setSubmitted(false);
  //   setenteredPlayername(event.target.value);
  // }

  function handleClick(){
  setenteredPlayername(playerName.current.value);
  playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredplayername ? enteredplayername : "unknown entity"}</h2>
      <p>
      {/* <input ref = {playerName} type="text" onChange={handleChange} value={enteredplayername}/> */}
      <input ref = {playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
