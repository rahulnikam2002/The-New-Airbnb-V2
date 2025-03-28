import React from "react";
import "./reviews.css";
import { reviews } from "./reviewdata";

export const Reviews = () => (
    <div className="reviewsContainer">
        <hr />
        <div className="overallRating"><i className="fi fi-ss-star"></i> {reviews.overallRating} · {reviews.totalReviews} reviews</div>

        <div className="reviewsGrid">
            <div className="overallGrid">
                <p>Overall rating</p>
                {[5, 4, 3, 2, 1].map((num, index) => (
                    <div key={index} className="barRow">
                        <span>{num}</span>
                        <div className={`bar ${num === 5 ? "full" : num === 4 ? "mid" : "empty"}`}></div>

                    </div>
                ))}

            </div>

            <div className="ratingsGrid">
                {reviews.ratings.map((item, index) => (
                    <div key={index} className="ratingItem">
                        <p>{item.label} <br /> <span className="ratingValue">{item.value}</span></p>
                        <p><i className={item.icon}></i></p>
                    </div>


                ))}

            </div>


        </div>
        <hr />

        <div className="commentsSection">
            {reviews.comments.map((c, i) => (
                <div key={i} className="commentCard">
                    <div className="reviewInfo">
                        <i class="fi fi-sr-circle-user"></i>
                        <div className="userInfo">
                            <p className="userName">{c.name}</p>
                            <p className="userLocation">{c.location}</p>
                        </div>
                    </div>


                    <div>
                        <div className="ratingWithText">
                            <div className="starRating">
                                {[...Array(5)].map((_, idx) => (
                                    <i key={idx} className={`fi fi-ss-star ${idx < c.rating ? "filled" : ""}`}></i>
                                ))}
                                <p className="ratingText">{c.timeAgo} · <span style={{ color: "var(--secondaryColor)" }}>{c.stayDuration}</span></p>
                            </div>

                        </div>
                        <p className="userComment">{c.comment}</p>
                        <a href="#" className="showMore">Show more</a>
                    </div>
                </div>
            ))}
        </div>

    </div>
);
