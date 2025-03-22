import { Header } from "../../components/header/header"
import { PropertyDetail } from "../../components/propertyDetail/propertyDetail"
import { ReservationBox } from "../../components/reservationBox/reservationBox"

export const SingleProperty = () => {
    return (
        <div style={{ padding: "0px 140px" }}>
            <Header />

            <PropertyDetail />
            <ReservationBox />
        </div>
    )
}