import React from 'react';
import Fade from 'react-reveal/Fade';
import './NewsFeed.css';

const NewsFeed = () => {
  const profileData = {
    data: {
      url: 'https://t.co/zhPUgyczNf',
      location: 'Chicago, IL',
      public_metrics: {
        followers_count: 40,
        following_count: 35,
        tweet_count: 34,
        listed_count: 0,
        like_count: 12,
      },
      id: '1524073874652073986',
      entities: {
        url: {
          urls: [
            {
              start: 0,
              end: 23,
              url: 'https://t.co/zhPUgyczNf',
              expanded_url: 'https://uicbeilab.github.io/',
              display_url: 'uicbeilab.github.io',
            },
          ],
        },
        description: {
          mentions: [
            {
              start: 41,
              end: 45,
              username: 'UIC',
            },
          ],
        },
      },
      username: 'BEI_Lab',
      protected: false,
      created_at: '2022-05-10T17:08:48.000Z',
      profile_image_url: 'https://pbs.twimg.com/profile_images/1558270461515030533/9SNMulz6_normal.jpg',
      name: 'BEI_Lab',
      description: 'Built Environment and Infrastructure Lab @UIC, Director:Aslihan Karatas',
      verified: false,
    },
  };

  const { data } = profileData;

  // Construct the X profile URL using the username
  const xProfileUrl = `https://x.com/${data.username}`;

  return (
    <div id="newsfeed">
      <div className="news2-container">
        <div className="twitter-news2">
          <div className="smartphone2">
            <div className="content2">
              <div className="twitter-feed-container">
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
                  <div className="flex items-center">
                    {/* Make profile image clickable */}
                    <a href={xProfileUrl} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={data.profile_image_url}
                        alt={`${data.name}'s profile`}
                      />
                    </a>
                    <div>
                      <div className="flex items-center">
                        {/* Make username clickable */}
                        <a href={xProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          <h2 className="text-xl font-bold">{data.name}</h2>
                        </a>
                        {data.verified && (
                          <svg
                            className="ml-2 w-4 h-4 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                        )}
                      </div>
                      <a href={xProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <p className="text-gray-600">@{data.username}</p>
                      </a>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-800">{data.description}</p>
                  <div className="text-blue-500 mt-2">
                    <a href={data.entities.url.urls[0].expanded_url} target="_blank" rel="noopener noreferrer">
                      {data.entities.url.urls[0].display_url}
                    </a>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm">Location: {data.location}</p>
                    <p className="text-gray-600 text-sm">Joined: {new Date(data.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;



