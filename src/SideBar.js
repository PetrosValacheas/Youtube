import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import HomeIcon from '@material-ui/icons/Home'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAlt'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMore'

function SideBar() {

	return (

		<div className="sidebar">

			<SidebarRow selected Icon ={HomeIcon} Title ="Home"/>
			<SidebarRow Icon ={WhatshotIcon} Title ="Treding"/>
			<SidebarRow Icon ={SubscriptionsIcon} Title ="Subscription"/>

			<hr/>

			<SidebarRow Icon={VideoLibraryIcon} Title="Library"/>
			<SidebarRow Icon={HistoryIcon} Title="History"/>
			<SidebarRow Icon={OndemandVideoIcon} Title="Your videos"/>
			<SidebarRow Icon={WatchLaterIcon} Title="Watch Later"/>
			<SidebarRow Icon={ThumbUpAltOutlinedIcon} Title="Liked videos"/>
			<SidebarRow Icon={ExpandMoreOutlinedIcon} Title="Show more"/>
		
		</div>
	);
}

export default SideBar;