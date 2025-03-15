import React, { useRef } from "react";
import "./category.css";
import { Button } from "../button/button";

const categories = [
    { name: "Amazing views", imageUrl: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" },
    { name: "Icons", imageUrl: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png" },
    { name: "Amazing pools", imageUrl: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" },
    { name: "Farms", imageUrl: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" },
    { name: "Tropical", imageUrl: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" },
    { name: "Islands", imageUrl: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" },
    { name: "OMG!", imageUrl: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" },
    { name: "Beachfront", imageUrl: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" },
    { name: "Lakefront", imageUrl: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" },
    { name: "Castles", imageUrl: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" },
    { name: "Countryside", imageUrl: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" },
    { name: "Historical homes", imageUrl: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg" },
    { name: "Mansions", imageUrl: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" },
    { name: "Design", imageUrl: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" },
    { name: "Bed & breakfasts", imageUrl: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" },
    { name: "Off-the-grid", imageUrl: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg" },
    { name: "Top cities", imageUrl: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" },

];


const CategoryFilterBar = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -200 : 200, // Adjust scroll distance
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="categoryFilter">
            <Button onClick={() => scroll("left")}
                style={{ border: "1px solid var(--borderColor)", borderRadius: "50%", padding: "6px 8px", fontSize: "var(--fontXSmall)" }}
                variant="default" icon={<i class="fi fi-br-angle-left"></i>} />
            <div className="categoryList" ref={scrollRef}>
                {categories.map((cat, index) => (
                    <div key={index} className="categoryItem">
                        <span className="icon"><img src={cat.imageUrl} width={20} alt="" /></span>
                        <span className="label">{cat.name}</span>
                    </div>
                ))}
            </div>
            <Button onClick={() => scroll("right")}
                style={{ border: "1px solid var(--borderColor)", borderRadius: "50%", padding: "6px 8px", fontSize: "var(--fontXSmall)" }}
                variant="default" icon={<i class="fi fi-br-angle-right"></i>} />
        </div>
    );
};

export default CategoryFilterBar;
