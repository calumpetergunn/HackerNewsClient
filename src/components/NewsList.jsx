import NewsListItem from './NewsListItem'
import { useState } from 'react'

function NewsList({loaded, recentStories}) {
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  // const [comments, setComments] = useState({});

  if(!loaded) {
    return <p>Loading...</p>
  }

  const NewsListItemNode = recentStories.map((story) => {
    let comments = []
    if (story.kids) {
       comments.push(story.kids.map((commentId) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
        .then((response) => response.json())
        .then((data) => (data));
      })
       )
    } 
  
    return <NewsListItem
    title={story.title}
    by={story.by}
    score={story.score}
    url={story.url}
    comments={comments}
    key={story.id}
    />;
  })
  
  return (
    <>
      <h3>Recent Stories</h3>
      {NewsListItemNode}
    </>
  );
}

export default NewsList;