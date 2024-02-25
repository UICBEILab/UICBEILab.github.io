
import { useState } from 'react';
import './SimpleTab.css';

function ProjectCard({item, index}) {
    const [isOpenArray, setIsOpenArray] = useState(Array(item.length).fill(false));
    // Function to handle title click
    const toggleDropdown = (index) => {
        setIsOpenArray(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
    return (
        <li className="projects-card" key={item.aKey}>
            <div className="card">
                <img
                    id="image"
                    src={item.url}
                    alt={item.title}
                />
            </div>
            <div className="flex justify-start">
            <h5 className="cursor-pointer" onClick={() => toggleDropdown(index)}>{item.title}</h5>
 
                {isOpenArray[index] && (
                    <div className="">
                        <p>{item.content}</p>
                    </div>
                )}
            </div>
        </li>
    );
}

export default ProjectCard