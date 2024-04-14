
// import { useState } from 'react';
// import './SimpleTab.css';

// function ProjectCard({item, index}) {
//     const [isOpenArray, setIsOpenArray] = useState(Array(item.length).fill(false));
//     // Function to handle title click
//     const toggleDropdown = (index) => {
//         setIsOpenArray(prevState => {
//             const newState = [...prevState];
//             newState[index] = !newState[index];
//             return newState;
//         });
//     };
//     return (
//         <li className="projects-card" key={item.aKey}>
//             <div className="card">
//                 <img
//                     id="image"
//                     src={item.url}
//                     alt={item.title}
//                 />
//             </div>
//             <div className="flex justify-start">
//             <h5 className="cursor-pointer" onClick={() => toggleDropdown(index)}>{item.title}</h5>
 
//                 {isOpenArray[index] && (
//                     <div className="">
//                         <p>{item.content}</p>
//                     </div>
//                 )}
//             </div>
//         </li>
//     );
// }

// export default ProjectCard


import React, { useState } from 'react';
import './SimpleTab.css';
import './ProjectCard.css'; // Ensure CSS styles align with ResearchContent styles

function ProjectCard({ item }) {
    const [showDetail, setShowDetail] = useState(false);

    // Function to toggle the display of project details
    const toggleDetail = () => setShowDetail(!showDetail);

    return (
        <div className="project-card">
            {/* Project Image */}
            <div className="image-container" onClick={toggleDetail}>
                <img
                    src={item.url}
                    alt={item.title}
                    className={`project-image ${showDetail ? 'expanded' : ''}`} // Add 'expanded' class for styling
                />
            </div>

            {/* Project Title and Content */}
            <div className="project-info">
                <h5 className="project-title" onClick={toggleDetail}>{item.title}</h5>
                {showDetail && (
                    <div className="project-content">
                        <p>{item.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
