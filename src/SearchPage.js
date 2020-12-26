import React from 'react'
import './searchPage.css'
import TuneOutlinedIcon from "@material-ui/icons/Tune"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

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

			<hr />

			<VideoRow

				views="1.4M"
				subs="675K"
				description="Hell there!"
				timestamp="30 secs ago"
				channel="Petros"
				title="VideoRow"

			 />
		</div>
	);
}

export default SearchPage;