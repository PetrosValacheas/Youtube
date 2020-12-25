import React from 'react';
import './recommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {

	return (
		<div className="recommendedVideos">
			<h2>Recommended</h2>
			<div className="recommendedVideos_videos">

				<VideoCard />
			</div>
		</div>
	);
}

export default RecommendedVideos;