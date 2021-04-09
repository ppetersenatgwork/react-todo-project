import React from "react"
import { useParams } from "react-router-dom"
import NotMatch from "./NotMatch"
import AboutService from "../services/AboutService"

export default function SinglePage() {
    const { slug } = useParams();

    if(!AboutService.hasAbout(slug)) {
        return <NotMatch />;
    }
    
    const aboutContent = AboutService.getAbout(slug);

    const { title, description } = aboutContent;

    return (
        <div className="main__content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}