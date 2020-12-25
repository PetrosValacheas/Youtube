import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import './sidebarRow.css'


function SidebarRow ({selected , Icon,Title}) {

	return (

		<div className={`sidebarRow ${selected && "selected"}`}>
		<Icon className="sidebarRow_icon" />
			<h2 className="sidebarRow_title"> {Title} </h2>
		</div>
	);
}

export default SidebarRow;