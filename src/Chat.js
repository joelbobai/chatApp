import React, { useEffect, useState } from 'react'
import { IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicIcon from '@material-ui/icons/Mic';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./Chat.css";

function Chat() {
    const [seed, setSeed] = useState("");
     const [input, setInput] = useState("");


    useEffect(() => {
    	return () => {
    	  setSeed(Math.floor(Math.random() * 5000));
    	};
    }, []);


    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You type >>> ", input);
        setInput("");   	
     };

	return (
		<div className="chat">

		  <div className="chat__header">
		     <img src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
             
             <div className="chat__headerInfo">

             <h3> Room name </h3>
             <p> Last seen at ...</p>
             
             </div>


             <div className="chat__headerRight">

                  <IconButton> 
				  <SearchIcon />
				 </IconButton>
				 <IconButton>
				  <VideoCallIcon />
				 </IconButton>
				 <IconButton>
				  <MenuIcon />
				 </IconButton>

             </div>
		  </div>

		  <div className="chat__body">
		    <p className={`chat__message ${true && "chat__reciever"}`}> 

               <span className="chat__name">hhhcyc hv</span>
                Hey Guy
                <span className="chat__timestamp"> 11:34pm </span>
		    </p>
		  </div>







		  <div className="chat__footer">
		      <SentimentSatisfiedOutlinedIcon />

		    <form>
		     <input 
			     value={input} 
			     onChange={(e) => setInput(e.target.value)}
			     type="text" 
			     placeholder="Type a message" 
		     />

		     <button onClick={sendMessage} type="submit"><ArrowForwardIosIcon /></button>
		    </form>

		    <MicIcon />

		  </div>
			
		</div>
	)
}

export default Chat;