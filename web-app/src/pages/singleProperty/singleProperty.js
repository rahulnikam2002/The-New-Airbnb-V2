import { Header } from "../../components/header/header"
import { PropertyDetail } from "../../components/propertyDetail/propertyDetail"
import { ReservationBox } from "../../components/reservationBox/reservationBox"
import { Reviews } from "../../components/reviewSection/reviews"

export const SingleProperty = () => {
    return (
        <div style={{ padding: "0px 140px" }}>
            <Header />

            <PropertyDetail />
            <ReservationBox />
            <Reviews />
        </div>
    )
}