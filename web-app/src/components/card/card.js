import { Button } from '../button/button'
import './card.css'

export const SingleCard = ({ image, location, distance, dates, price, rating }) => {
    return (
        <div className="singleCard">
            <img src={image} alt={location} className="cardImage" />
            <Button
                size={"xSmall"}
                style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "var(--backgroundLight)",
                    color: "var(--textDark)",
                    fontSize: "var(--fontMedium)",
                    fontWeight: "var(--fontLWeight)",
                    borderRadius: "var(--radiusXLarge)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    zIndex: "1"
                }}
                text={"Guest favourite"} />
            <i class="fi fi-rs-heart"></i>

            <div className="cardDetails">
                <div className="locationStar">
                    <p>{location}</p>

                    <div className='starRating'>
                        <i class="fi fi-ss-star"></i>
                        <p>{rating}</p>
                    </div>
                </div>

                <p>{distance}</p>
                <p>{dates}</p>
                <p><span className='price'>{price}</span> night</p>

            </div>
        </div>
    )
}