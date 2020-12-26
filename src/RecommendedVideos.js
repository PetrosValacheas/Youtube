import React from 'react';
import './recommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {

	return (
		<div className="recommendedVideos">
			<h2>Recommended</h2>
			<div className="recommendedVideos_videos">

				<VideoCard 

					title ="Become a web developer!"
					views="2.3M Views"
					timestamp="3 days ago"
					channelImage=""
					channel="Petros"
					image=""
				/>

				<VideoCard 

					title ="Become a web developer!"
					views="2.3M Views"
					timestamp="3 days ago"
					channelImage=""
					channel="Petros"
					image=""
				/>
				<VideoCard 

					title ="Become a web developer!"
					views="2.3M Views"
					timestamp="3 days ago"
					channelImage=""
					channel="Petros"
					image=""
				/>
			</div>
		</div>
	);
}

export default RecommendedVideos;