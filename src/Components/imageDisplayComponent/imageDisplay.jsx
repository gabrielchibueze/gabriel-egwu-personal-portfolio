/* eslint-disable react/prop-types */
import "./imageDisplay.css"
export default function ImageDisplay({ props }) {
    return <div className="image-caption-helper">
        <img className="welcome-image1" src={props.imageName || ""} alt={props.imageDescription || "No image Caption"} />
        <p>{props.imageComment || ""}</p>
    </div>
}