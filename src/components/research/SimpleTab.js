import { useState } from 'react';
import './SimpleTab.css';
import { ResearchData } from './ResearchData';
import {ResearchContent} from './ResearchContent';
import ProjectCard from './ProjectCard';

const SimpleTab = ({ activeKey, children }) => {

    const [key, setKey] = useState(activeKey)



    return (
        <div className='tab-container'>
            <div className='tabs'>
                {children.map(item => {
                    return (
                        <div key={item.props.aKey} className={key === item.props.aKey ? "tab-item active" : "tab-item"}
                            onClick={() => setKey(item.props.aKey)}>
                            {item.props.title}
                        </div>
                    )
                })}
            </div>
            <div className='tab-content'>
                {children.map(item => {
                    return (
                        <div className={key===item.props.aKey ? "cards tab-pane active" : "cards tab-pane"}>
                            <ul className="projects-grid">
                                {item.props.children.map((item, index) => {
                                    return <ProjectCard item={item} index={index}></ProjectCard>
                                })}

                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const Tab = ({ children }) => {
    return (
        <div className='tab'>
            {children}
        </div>
    )
}

export default SimpleTab;