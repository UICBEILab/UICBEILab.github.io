import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import Fade from 'react-reveal/Fade';
import './News.css';

import Awards from './Awards';

const News = ({ username }) => {

    const twitterUsername = username.replace('@', ''); // Remove the '@' symbol

    return (
        <div id="news">
            <Fade bottom>
                <h1>Awards/News</h1>
            </Fade>
            <div className="news-container">
                <div className="awards-container">
                    <Awards />
                </div>

                <div className="twitter-news">
                    <div className="smartphone">
                        <div className="content">
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
    );
};

export default News;