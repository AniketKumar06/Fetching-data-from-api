import React from "react";
import './cards.css';

function Card(props) {
    const { date, link, title, excerpt, image } = props;

    return (
        <div className="card">
            <a className="card-link" href={link}>
                <img src={image} alt={title} />
            </a>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <p className="card-meta">
                    {date}
                </p>
            </div>
        </div>
    );
}

export default Card;
