import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import Fade from 'react-reveal/Fade';
import './NewsFeed.css';

const NewsFeed = ({ username }) => {
    const twitterUsername = username.replace('@', ''); // Remove the '@' symbol

    return (
        <div id="newsfeed">
            <div className="news2-container">
                <div className="twitter-news2">
                    <div className="smartphone2">
                        <div className="content2">
                            <div className="twitter-feed-container">
                                <Timeline
                                    dataSource={{
                                        sourceType: 'profile',
                                        screenName: twitterUsername,
                                    }}
                                    options={{
                                        tweetLimit: 5,
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
