import { Button } from "../button/button"
import { SearchBar } from "../search/search"
import './header.css'

export const Header = () => {
    return (
        <div className="headerMain">
            <div className="logo">
                <i class="fi fi-tr-airplane-journey"></i>
                <p>Airbnb</p>

            </div>
            <div className="searchbtn">
                <SearchBar />
            </div>
            <div className="profile">
                <Button variant="default" icon={<i class="fi fi-br-menu-burger"></i>} />
                <Button style={{ fontSize: "var(--fontXLarge)", color: "var(--secondaryColor)" }}
                    iconStyle={{ position: "relative", top: "4px" }}
                    variant="default" icon={<i class="fi fi-sr-circle-user"></i>} />

            </div>
        </div>
    )
}