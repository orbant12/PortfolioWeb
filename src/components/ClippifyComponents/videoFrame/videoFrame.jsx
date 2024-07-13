

const VideoFrame = ({videoSrc}) => {
    return (
<div className="experience-show rounded" style={{zIndex:1}}>
    <div className="video-frame rounded">
      
        <video loop autoPlay muted className="video-frame__video rounded"  >
        <source type="video/mp4" src={videoSrc} />
        </video>
    </div>
</div>
    )
}

export default VideoFrame