import { useEffect, useState } from "react";
import { SingleCard } from "../card/card";
import './cardlist.css'

import { propertiesData } from "./data";




export const CardList = () => {

    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setProperties(propertiesData)
            setIsLoading(false)
        }, 500)

    }, [])

    return (
        <div>
            {
                isLoading &&
                <p>Loading...</p>
            }
            <div className="cardList">
                {properties.map((property, index) => (
                    <SingleCard
                        key={index}
                        id={index}
                        image={property.image}
                        location={property.location}
                        distance={property.distance}
                        dates={property.dates}
                        price={property.price}
                        rating={property.rating}
                    />
                ))}
            </div>
        </div>
    )
}