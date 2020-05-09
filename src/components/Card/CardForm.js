import React from 'react';
import './CardForm.css'


const CardForm = ({children,description,src,title}) => (
    <div className="wrapper">
        <div className="card">
            <div className="image">
                <img src={src} alt=""/>
            </div>
            <div className="title">
                {title}
            </div>
            <div className="info">
                <span className="icon">i</span>
                <h2>{description}</h2>
                <p>
                    {children}
                </p>
            </div>
        </div>
    </div>
);


export default CardForm;



