import React from "react";
import './Research.css';
import { ResearchData } from './ResearchData';

const Research = () => {
    return (
        <div id="research">
            <h1>Research</h1>
            <div className="cards">
                <div className="cards-body">
                    {ResearchData.map(item => {
                        return (
                            <div key={item.aKey}>
                                {/* <div className="card"> */}
                                    <a className="card">
                                        <img id="image" src={item.url} alt={item.title} />
                                    </a>
                                {/* </div> */}
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Research;