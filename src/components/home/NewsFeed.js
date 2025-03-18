import React, { useEffect, useState } from 'react';

const MastodonFeed = () => {
  const [latestPost, setLatestPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mastodonApiUrl = 'https://mastodon.social/api/v1/accounts/lookup?acct=AslihanKaratas';

  const fetchMastodonPosts = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(mastodonApiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const accountData = await response.json();
      const userId = accountData.id;

      const postsResponse = await fetch(`https://mastodon.social/api/v1/accounts/${userId}/statuses`);
      if (!postsResponse.ok) {
        throw new Error(`HTTP error! Status: ${postsResponse.status}`);
      }

      const posts = await postsResponse.json();
      if (posts.length === 0) {
        setLatestPost(null);
        return;
      }

      const firstPost = posts[0];
      const imageUrl = firstPost.media_attachments.length > 0 ? firstPost.media_attachments[0].url : null;

      const post = {
        link: firstPost.url,
        pubDate: firstPost.created_at,
        description: firstPost.content,
        imageUrl: imageUrl,
      };

      setLatestPost(post);
    } catch (err) {
      console.error('Error fetching Mastodon API:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMastodonPosts();
  }, []);

  return (
    <div className="mastodon-feed" style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
      {!loading && !error && latestPost && (
        <div
          style={{
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: 'white',
            textAlign: 'center',
            maxWidth: '400px',
            marginLeft: 'auto'
          }}
        >
          <a
            href={latestPost.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}
          >
            View Post
          </a>
          <p dangerouslySetInnerHTML={{ __html: latestPost.description }} style={{ fontSize: '0.9em', marginTop: '10px' }}></p>
          {latestPost.imageUrl && (
            <img
              src={latestPost.imageUrl}
              alt="Post Image"
              style={{ maxWidth: '80%', maxHeight: '200px', borderRadius: '8px', marginTop: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <p style={{ fontSize: '0.8em', color: '#555', marginTop: '10px' }}>
            Published on: {latestPost.pubDate ? new Date(latestPost.pubDate).toLocaleString() : 'Unknown Date'}
          </p>
        </div>
      )}
      {loading && <p>Loading latest post...</p>}
      {error && <p>There was an error fetching the feed. Please try again later.</p>}
    </div>
  );
};

export default MastodonFeed;
