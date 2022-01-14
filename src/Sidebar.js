//retrieve one document and save it to userDetails.
import React, { useEffect, useState } from 'react';
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import SearchIcon from '@material-ui/icons/Search';
import './Sidebar.css';
import SidebarChat from "./SidebarChat";
import {db} from "./firebase";

function Sidebar() {
       const [rooms, setRooms] = useState("");
  
       useEffect(() => {
       	 db.collection("rooms").onSnapshot((snapshot) => 
       	 	setRooms(
       	 	     snapshot.docs.map((doc) => ({

				      id: doc.id,
				      data: doc.data(),

				    }))
			 )
     );
       	
   }, [])


	return (
		<div className="sidebar">
		  <div className="Sidebar__header">

		    <AccountCircleIcon />

			  <div className="Sidebar__headerRight">

			     <IconButton> 
				  <DonutLargeIcon />
				 </IconButton>
				 <IconButton>
				  <ChatIcon />
				 </IconButton>
				 <IconButton>
				  <DragIndicatorIcon />
				 </IconButton>

			  </div>
		</div>

		  <div className="sidebar__search">
		     <div className="sidebar__searchContainer">
		       <SearchIcon />
               <input placeholder="Search or start new chat" type="text" />
		     </div>
		  </div>

		  <div className="Sidebar__chats">
		   <SidebarChat addNewChat />
		   <SidebarChat />
		    {rooms.map((room) => (
           <SidebarChat key={room.id} id={room.id} name={room.data.name} />
		    	))}
		  </div>
			
		</div>
	);
}

export default Sidebar;