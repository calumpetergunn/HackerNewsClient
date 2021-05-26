import NewsListItem from './NewsListItem'
import { useState, useEffect } from 'react'

function NewsList({loaded, recentStories, onCommentButtonClick}) {
  // const [commentsLoaded, setCommentsLoaded] = useState(false);
  // const [comments, setComments] = useState([]);

  if(!loaded) {
    return <p>Loading...</p>
  }

  const NewsListItemNode = recentStories.map((story) => {
    return <NewsListItem
    title={story.title}
    by={story.by}
    score={story.score}
    url={story.url}
    kids={story.kids}
    key={story.id}
    onCommentButtonClick={(commentIdsToGet) => {
      onCommentButtonClick(commentIdsToGet);
      }}
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