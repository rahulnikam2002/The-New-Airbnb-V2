import { useState } from "react";
import { Button } from "../button/button";
import CategoryFilterBar from "../category/category";
import "./filter.css";

export const FilterBar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="filterBar">
            <div style={{ width: "75%", padding: "0px 10px" }}>
                <CategoryFilterBar />
            </div>

            <div className="filtSec">
                <Button
                    variant={"default"}
                    size={"large"}
                    iconStyle={{ marginRight: "10px", fontSize: "16px" }}
                    style={{
                        border: "1px solid var(--borderColor)",
                        fontSize: "var(--fontXSmall)",
                        borderRadius: "var(--radiusSmall)",
                        fontWeight: "var(--fontLWeight)",
                        margin: "0px 10px"
                    }}
                    icon={<i className="fi fi-rr-settings-sliders"></i>}
                    text={"Filters"}
                />


                <Button
                    variant={"default"}
                    onClick={handleToggle}
                    iconStyle={{
                        position: "relative",
                        top: "5px",
                        fontSize: "35px",
                        color: "var(--borderColor)",
                        padding: "0px"
                    }}
                    style={{
                        border: "1px solid var(--borderColor)",
                        fontSize: "var(--fontXSmall)",
                        borderRadius: "var(--radiusSmall)",
                        fontWeight: "var(--fontLWeight)",
                        margin: "0px 10px",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        minWidth: "220px",

                    }}
                    icon={
                        isToggled ? (
                            <i className="fi fi-sr-toggle-on"></i>
                        ) : (
                            <i className="fi fi-sr-toggle-off"></i>
                        )
                    }
                    text={"Display total before taxes"}
                />
            </div>
        </div>
    );
};
