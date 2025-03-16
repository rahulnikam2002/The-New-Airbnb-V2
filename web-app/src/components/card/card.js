import './card.css'

export const SingleCard = ({ image, location, distance, dates, price, rating }) => {
    return (
        <div className="singleCard">
            <img src={image} alt={location} className="cardImage" />
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