import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import HomeIcon from '@material-ui/icons/Home'

function SideBar() {

	return (

		<div className="sidebar">

			<SidebarRow Icon ={HomeIcon} Title ="Home"/>
			<SidebarRow Icon ={WhatshotIcon} Title ="Treding"/>
			<SidebarRow Icon ={SubscriptionsIcon} Title ="Subscription"/>
		
		</div>
	);
}

export default SideBar;