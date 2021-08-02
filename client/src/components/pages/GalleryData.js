import React,{useState} from "react"
import { ImageData } from "../pages/ImageData"
import CloseIcon from '@material-ui/icons/Close';
import "./gallery.css"

const GalleryData = () => {
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const getImg = (image) => {
        setTempImgSrc(image);
        setModel(true)
    }
    return (
        <>
        <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} alt="modelimg"/>
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
            <div className="gallery">
                {ImageData.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={()=>getImg(item.image)}>
                            <img src={item.image} alt={item.id} style={{width:"100%"}}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GalleryData