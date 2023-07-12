import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { CoursesData } from "./CoursesData";
import './Courses.css';

const Courses = () => {
    const [hovered, setHovered] = useState(null);

    // const handleMouseEnter = (index) => {
    //     setHoveredIndex(index);
    // };

    // const handleMouseLeave = () => {
    //     setHoveredIndex(null);
    // };

    return (
        <div id="courses">
            <Fade bottom>
                <h1>Courses</h1>
            </Fade>

            <ul className="courses-cards">
                {CoursesData.map((course, index) => (
                    <li>
                        <a href="" className="courses-card">
                            <img className="card__image" src={course.image} alt={course.title} />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div className="card__header-text">
                                        <h3 className="card__title">{course.number}</h3>
                                        <span className="card__status">{course.name}</span>
                                    </div>
                                </div>
                                <div className="card__description">
                                    <a href={course.pdf} download>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </a>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;