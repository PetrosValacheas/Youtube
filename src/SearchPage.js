import React from 'react'
import './searchPage.css'
import TuneOutlinedIcon from "@material-ui/icons/Tune"
import ChannelRow from './ChannelRow'

function SearchPage() {

	return (

		<div className="searchPage">

			<div className="searchPage_filter">

				<TuneOutlinedIcon />
				<h2>Filter</h2>

			</div>

			<hr/>

			<ChannelRow

				image=""
				channel="Petros"
				verified=""
				subs="330K"
				noOfVideos={10}
				description="Hello there!"

			/>
		</div>
	);
}

export default SearchPage;