


const ImageFrame = ({ image }) => {
    return (
        <div className="experience-show rounded" >
        <div className="image-frame__video">
            <img className="image-frame__image" src={image}  />
        </div>
        </div>
    )
}

export default ImageFrame