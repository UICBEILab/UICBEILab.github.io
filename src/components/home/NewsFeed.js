import React from 'react';
import { Timeline } from 'react-x-widgets'; // Updated package name
import Fade from 'react-reveal/Fade';
import './NewsFeed.css';

const NewsFeed = ({ username }) => {
    const xUsername = username.replace('@', ''); // Assuming '@' is still not needed

    return (
        <div id="newsfeed">
            <div className="news2-container">
                <div className="x-news2">  {/* Updated class name */}
                    <div className="smartphone2">
                        <div className="content2">
                            <div className="x-feed-container"> {/* Updated class name */}
                                <Timeline
                                    dataSource={{
                                        sourceType: 'profile',
                                        screenName: xUsername,
                                    }}
                                    options={{
                                        postLimit: 5, // Hypothetical terminology change
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;