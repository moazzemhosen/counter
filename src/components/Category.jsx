
import "./category.css";
function Category({image,label}){
    return( 
    <div className="boldcolor">
        <img src={image} alt="No image" />
        <b>{label}</b>
    </div>
    )
}

export {Category}