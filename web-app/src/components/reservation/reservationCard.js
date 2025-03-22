import './reservationCard.css'
import { Button } from "../button/button"


export const ReservationCard = ({ price = 1 }) => {



    return (
        <div className="reservationRight">
            <div className="price">
                <p className="oldPrice">₹4,920</p>
                <p className="newPrice">{price}</p>
                <span>night</span>
            </div>

            <div class="dateGuestContainer">
                <div class="dateWrapper">
                    <div class="checkin checkoutBox">
                        <p class="label">CHECK-IN</p>
                        {/* <p class="date">{checkIn}</p> */}
                    </div>
                    <div class="checkout checkoutBox">
                        <p class="label">CHECKOUT</p>
                        {/* <p class="date">{checkOut}</p> */}
                    </div>
                </div>

                <div class="guestWrapper checkoutBox">
                    <p class="label">GUESTS</p>
                    <select class="guestSelect">
                        <option>1 guest</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                    </select>
                </div>
            </div>



            <Button size={"large"} style={{
                width: "100%",
                backgroundColor: "var(--primaryColor)",
                color: "var(--backgroundLight)",
                fontWeight: "var(--fontLWeight)",
                borderRadius: "12px"
            }} text={"Reserve"} />

            <div className="infoText">
                <p>You won't be charged yet</p>
            </div>



            <div className="priceRow">
                <p>₹4,920 x 5 nights</p>
                <p>₹24,600</p>
            </div>

            <div className="priceRow">
                <p>Airbnb service fee</p>
                <p>₹3,056</p>
            </div>
            <div className="total">
                <p>Total before taxes</p>
                <p>₹24,704</p>
            </div>

        </div>
    )
}