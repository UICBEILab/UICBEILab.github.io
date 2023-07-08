import { useState } from 'react';
import './SimpleTab.css';
import Fade from 'react-reveal/Fade';

const SimpleTab = ({activeKey, children}) => {

    const [key, setKey] = useState(activeKey)


    return (
        <div className='tab-container'>
            <div className='tabs'>
                {children.map(item => {
                    return (
                        <div key={item.props.aKey} className={key===item.props.aKey ? "tab-item active" : "tab-item"}
                            onClick={() => setKey(item.props.aKey)}>
                            {item.props.title}
                        </div>
                    )
                })}
            </div>
            <div className='tab-content'>
                {children.map(item => {
                    return (
                        <div key={item.props.aKey} className={key===item.props.aKey ? "tab-pane active" : "tab-pane"}>
                            <ul className="tab-desc">
                                {item.props.children.map((contentItem, index) => {
                                    return (
                                        <Fade bottom>
                                            <li key={index}>
                                                <p>{contentItem}</p>
                                            </li>
                                        </Fade>
                                    )
                                } )}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const Tab = () => {
    return (
        <div className='tab'>
        </div>
    )
}

export default SimpleTab;