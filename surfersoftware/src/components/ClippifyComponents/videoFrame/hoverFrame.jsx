import HoverVideoPlayer from 'react-hover-video-player';

const HoverFrame = ({video,logo}) => {
    return(
    <div className="experience-show">

    <HoverVideoPlayer
        videoSrc={video}
        pausedOverlay={
        <img
            src={logo} // Replace with the actual thumbnail URL property
            alt="Video Thumbnail"
            style={{ width: '100%', height: '100%', objectFit: 'cover' ,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',background:"black",opacity: 1,transition: 'opacity 0.3s ease-in-out'}}
        />
        }
        videoStyle={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            aspectRatio: '16/9',
            border:"1px solid black",
            backgroundColor:"white",
            opacity: 1, // Set the opacity to 1 when video is hovered
            transition: 'opacity 0.3s ease-in-out', // Add transition for smooth effect
        }}
        
    />
</div>
)}

export default HoverFrame;