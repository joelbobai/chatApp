import React,  { useEffect, useState } from "react";
import {db} from './firebase'
import "./SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
    	return () => {
    	  setSeed(Math.floor(Math.random() * 5000));
    	};
    }, []);

    const createChat = () => {

        const roomName = prompt("Please enter name for chat");

        if (roomName) {

        	// do some clever database stuff.....
        	db.collection("rooms").add({

        		name: roomName,


           });
        }
    };



	return !addNewChat ? (
		<div className="sidebarChat">
			<img src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  /> 
			<div className="sidebarChat__info">

			  <h2>{name}</h2>
			  <p>Last massage...</p>

			</div>
		</div>
	): ( 
         <div onClick={createChat}
         className="sidebarChat">
         <h2>Add new chat</h2>
         </div>
	 );
}

export default SidebarChat;