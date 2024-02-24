import React from "react";
import brand from "../assets/brand.png";

function Tile({titleStory,children,imageSubject, imageSubjectAlt}) {
    return(
        <section>
            {imageSubject && <img src={imageSubject} alt={imageSubjectAlt}/>}
            <h2> {titleStory} </h2>
            {children}
        </section>
    )
}

export default Tile;