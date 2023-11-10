import React from "react";
import { Link } from "react-router-dom";

export default function SocialLinks() {

const social = [
    {
        name: "twitter",
        className: "bx bxl-twitter",
    },
    {
        name: "facebook",
        className: "bx bxl-facebook",
    },
    {
        name: "instagram",
        className: "bx bxl-instagram",
    },
    {
        name: "google-plus",
        className: "bx bxl-google-plus",
    },
    {
        name: "linkedin",
        className: "bx bxl-linkedin",
    }
];


    return (
        <>
        {social.map((link, index) => (
        <div className="social-links" key={index}>
        <Link to="#" className={link.name}><i className={link.className}></i></Link>
        </div>
        ))}
        </>
    )
}