import { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';

function HackerNewsContainer() {
  const [loaded, setLoaded] = useState(false);
  const [recentStories, setRecentStories] = useState({});

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((response) => response.json())
      .then((data) => {
        const storyIds = data.slice(0, 20);
        const storyFetch = storyIds.map((id) => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => response.json());
        });
        Promise.all(storyFetch)
          .then((data) => setRecentStories(data))
          .then(() => setLoaded(true));
      });
  }, []);

  return (
    <>
      <h1>Hacker News</h1>
      <NewsList recentStories={recentStories} loaded={loaded}/>
    </>
  );
}

export default HackerNewsContainer;
