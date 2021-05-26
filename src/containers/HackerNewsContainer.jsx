import { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import Filter from '../components/Filter';
import CommentsList from '../components/CommentsList';

function HackerNewsContainer() {
  const [loaded, setLoaded] = useState(false);
  const [recentStories, setRecentStories] = useState({});
  const [filteredStories, setFilteredStories] = useState({});
  const [selectedComments, setSelectedComments] = useState(0);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((response) => response.json())
      .then((data) => {
        const storyIds = data.slice(0, 20);
        const storyFetch = storyIds.map((id) => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => response.json());
        });
        Promise.all(storyFetch)
          .then((data) => {
            setRecentStories(data);
            setFilteredStories(data);
          })
          .then(() => setLoaded(true));
      });
  }, []);

  const getCommentIds = (commentIds) => {
    const commentPromises = commentIds.map((id) => {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => response.json())
        .then((data) => data);
    });
    Promise.all(commentPromises).then((commentObjects) => setSelectedComments(commentObjects));
  };

  const filterStories = (searchTitle) => {
    let foundStories = [];
    recentStories.forEach((story) => {
      if (story.title.includes(searchTitle)) {
        foundStories.push(story);
      }
    });
    setFilteredStories(foundStories);
  };

  return (
    <>
      <h1>Hacker News</h1>
      <Filter
        onFilterSubmit={(titleToSearch) => {
          filterStories(titleToSearch);
        }}
      />
      <NewsList
        recentStories={filteredStories}
        loaded={loaded}
        onCommentButtonClick={(commentIdsToGet) => {
          getCommentIds(commentIdsToGet);
        }}
      />
      <CommentsList 
        selectedComments={selectedComments}
      />
    </>
  );
}

export default HackerNewsContainer;
