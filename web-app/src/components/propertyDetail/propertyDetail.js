import { Link, useParams } from "react-router-dom"
import { propertyData } from "./propertyData"
import { Button } from "../button/button"
import './propertyDetail.css'

export const PropertyDetail = () => {
    const { id } = useParams()
    const property = propertyData[id]


    if (!property) {
        return <p>Property not found</p>
    }

    return (
        <div className="propertyContainer">
            <div className="propertyCard">
                <div className="propertyTitle">
                    <p>{property.title}</p>
                    <Link className="actions">
                        <div className="share">
                            <i class="fi fi-rr-share-square"></i>
                            <p>Share</p></div>
                        <div className="save">
                            <i class="fi fi-rr-bookmark"></i>
                            <p>Save</p>
                        </div>
                    </Link>

                </div>
                <div className="propertyGallery">
                    <div className="mainImage">
                        <img src={property.image} alt="Main Property" />
                    </div>
                    <div className="galleryGrid">
                        {
                            property.gallery.map((img, index) => (
                                <img key={index} src={img} alt={`Gallery ${index + 1}`} />

                            ))
                        }

                    </div>
                </div>
                <div className="showPhotosBtn">
                    <Button
                        size={"small"}
                        style={{
                            backgroundColor: "var(--backgroundLight)",
                            fontSize: "var(--fontSmall)",
                            fontWeight: "var(--fontMWeight)",
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid var(--textDark)",
                            borderRadius: "var(--radiusSmall)"

                        }}
                        iconStyle={{
                            fontSize: "var(--fontXSmall)",

                        }}
                        icon={<i class="fi fi-br-grid"></i>} text={"Show all photos"} />
                </div>

            </div>
        </div>
    )
}