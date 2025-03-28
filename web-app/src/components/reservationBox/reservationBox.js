import { Link, useParams } from "react-router-dom"
import { propertyData } from "../propertyDetail/propertyData"
import './reservationBox.css'
import { ReservationCard } from "../reservation/reservationCard"
import { Button } from "../button/button"

const amenities = [
    { icon: "fi fi-rr-mountain", label: "Valley view", key: "valleyView" },
    { icon: "fi fi-rr-flower-butterfly", label: "Garden view", key: "gardenView" },
    { icon: "fi fi-rr-utensils", label: "Kitchen", key: "kitchen" },
    { icon: "fi fi-rr-laptop", label: "Dedicated workspace", key: "dedicatedWorkspace" },
    { icon: "fi fi-rr-washer", label: "Free washer – In building", key: "freeWasherInBuilding" },
    { icon: "fi fi-rr-wifi", label: "Wifi – 11 Mbps", key: "wifi11Mbps" },
    { icon: "fi fi-rr-car", label: "Free on-street parking", key: "freeOnStreetParking" },
    { icon: "fi fi-rr-camera-cctv", label: "Exterior security cameras on property", key: "exteriorSecurityCameras" },
    { icon: "fi fi-rr-sensor-fire", label: "Carbon monoxide alarm", key: "carbonMonoxideAlarm", disabled: true },
    { icon: "fi fi-rr-smoke", label: "Smoke alarm", key: "smokeAlarm", disabled: true }
];



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

                <hr />
                <div className="sleepingRoom">
                    <div className="roomHeader">
                        <p>Where you'll sleep</p>

                        <div className="roomNav">
                            <span>1 / 2</span>
                            <Button style={{ border: "1px solid var(--borderColor)", borderRadius: "50%", padding: "6px 8px", fontSize: "var(--fontXSmall)" }}
                                variant="default" icon={<i class="fi fi-rr-angle-left"></i>} />
                            <Button style={{ border: "1px solid var(--borderColor)", borderRadius: "50%", padding: "6px 8px", fontSize: "var(--fontXSmall)" }}
                                variant="default" icon={<i class="fi fi-rr-angle-right"></i>} />
                        </div>
                    </div>

                    <div className="roomCards">
                        <div className="singleBedroom">
                            <img src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/059a47ee-268e-44b9-ad5c-5ccd49b52b44.jpg?im_w=960" alt="Bedroom 1" />
                            <p className="roomTitle">Bedroom 1</p>
                            <p className="roomInfo">1 double bed</p>
                        </div>

                        <div className="singleBedroom">
                            <img src="https://a0.muscache.com/im/pictures/330c8516-6d9b-49c3-be2c-779ef9188e39.jpg?im_w=960" alt="Bedroom 2" />
                            <p className="roomTitle">Bedroom 2</p>
                            <p className="roomInfo">1 king bed</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="amenitiesSection">
                    <p>What this place offers</p>
                    <div className="amenitiesGrid">
                        {amenities.map((item) => (
                            <div className="amenityItem">
                                <i className={item.icon}></i>
                                <span className="label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <Button variant={"default"}
                        size={"large"}

                        style={{
                            border: "1px solid var(--textDark)",
                            fontSize: "var(--fontMedium)",
                            borderRadius: "var(--radiusSmall)",
                            fontWeight: "var(--fontMWeight)",
                            color: "var(--textDark)",
                            marginTop: "20px"

                        }} text={`Show all ${amenities.length} amenities`} />
                </div>



            </div>

            <ReservationCard price={property.price} />


        </div>
    )
}