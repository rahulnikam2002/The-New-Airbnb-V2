import { Link, useParams } from "react-router-dom"
import { propertyData } from "../propertyDetail/propertyData"
import './reservationBox.css'
import { ReservationCard } from "../reservation/reservationCard"



export const ReservationBox = () => {

    const { id } = useParams()
    const property = propertyData.find(item => item.id === Number(id))

    console.log(property, id)
    if (!property) {
        return <p>Property not found</p>

    }


    return (
        <div className="reservationBox">
            <div className="reservationLeft">
                <div className="propertyInfo">
                    <p>{property.location}</p>
                    <p>6 guests ·2 bedrooms · 2 beds · 2 bathrooms</p>
                    <div className='starReview'>
                        <i class="fi fi-ss-star"></i>
                        <p>5.0</p> ·
                        <Link>3 reviews</Link>
                    </div>

                </div>
                <hr />
                <div className="host">
                    <i class="fi fi-sr-circle-user"></i>
                    <div className="hostName">
                        <p style={{ fontWeight: "var(--fontLWeight)" }}>Hosted by saurav</p>
                        <p style={{ color: "var(--secondaryColor)", fontSize: "var(--fontSmall)" }}>11 years hosting</p>
                    </div>
                </div>
                <hr />
                <div className="highlightsContainer">
                    <div className="highlightItem">
                        <i class="fi fi-rr-fan"></i>
                        <div>
                            <p style={{ fontWeight: "var(--fontLWeight)", color: "var(--textDark)" }} >Designed for staying cool</p>
                            <p style={{ color: "var(--secondaryColor)", fontSize: "var(--fontSmall)" }}>Beat the heat with the A/C and ceiling fan.</p>
                        </div>
                    </div>

                    <div className="highlightItem">
                        <i class="fi fi-ts-check-in-calendar"></i>
                        <div>
                            <p style={{ fontWeight: "var(--fontLWeight)", color: "var(--textDark)" }} >Exceptional check-in experience</p>
                            <p style={{ color: "var(--secondaryColor)", fontSize: "var(--fontSmall)" }}>Recent guests gave the check-in process a 5-star rating.</p>
                        </div>
                    </div>

                    <div className="highlightItem">
                        <i class="fi fi-tr-hand-peace"></i>
                        <div>
                            <p style={{ fontWeight: "var(--fontLWeight)", color: "var(--textDark)" }} >Peace and quiet</p>
                            <p style={{ color: "var(--secondaryColor)", fontSize: "var(--fontSmall)" }}>This home is in a quiet area.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="desc">
                    <p>Enjoy your beach days at our cozy space, very close to Vagator beach.
                        It's a brand new listing curated with love and care.
                        Very accessible, within 2 mins to beach, market, bars and restaurants. 2 mins to Vagator beach, 5 mins to Anjuna, House of Chapora, Thalasa, Kiki…the works!
                        Book your stay here to avoid any hassle with traffic or moving around for amenities.
                        Spend leisure time at the pool in the property 🏊🏼
                    </p>
                    <Link>Show more <i style={{
                        fontSize: "var(--fontSmall)",
                        margin: "5px 5px 0px 5px"
                    }} class="fi fi-rr-angle-right"></i></Link>
                </div>

            </div>
            <ReservationCard price={property.price}
            />
        </div>
    )
}