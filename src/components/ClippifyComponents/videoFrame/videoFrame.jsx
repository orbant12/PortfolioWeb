

const VideoFrame = ({videoSrc}) => {
    return (
<div className="experience-show">
    <div className="video-frame">
      
        <video loop autoPlay muted className="video-frame__video"  >
        <source type="video/mp4" src={videoSrc} />
        </video>
    </div>
</div>
    )
}

export default VideoFrame